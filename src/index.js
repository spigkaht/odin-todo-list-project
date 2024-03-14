import "./styles.css";
import { changePriority } from "./changePriority";
import { createTodo } from "./createTodo";
import { deleteTodo } from "./deleteTodo";
import { expandTodo } from "./expandTodo";
import { markComplete } from "./markComplete";
import { updateDOM } from "./updateDOM";
import { viewAllProjects } from "./viewAllProjects";
import { viewProject } from "./viewProject";
import { createProject } from "./createProject";

// for testing
console.log("hello world");
changePriority();
createTodo();
deleteTodo();
expandTodo();
markComplete();
// updateDOM();
viewAllProjects();
viewProject();
// createProject();

// set class for Project objects
class Project {
  constructor(name) {
    this.name = name;
    this.todo = [];
  }

  addTodo(newTodo) {
    this.todo.push(newTodo);
  }
}

class Todo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let gardenProject = new Project("Garden");
let tempTodo = new Todo("Weed backyard", "Spray weeds in backyard, pull easy ones", "March 11", "Low");
gardenProject.addTodo(tempTodo);
console.log(gardenProject);

// add project click, create project object
// NEED TO LEARN MODALS, PASS MODAL INFO THROUGH CREATEPROJECT MODULE
const addProjectBtn = document.querySelector('#addProject');
const projectDialog = document.querySelector('#projectDialog');
addProjectBtn.addEventListener('click', () => {
  projectDialog.showModal();
  createProject();
});

// add todo click, create todo object
const addTodoBtn = document.querySelector('#addTodo');
const todoDialog = document.querySelector('#todoDialog');
addTodoBtn.addEventListener('click', () => {
  todoDialog.showModal();
});

// current project click, run DOM update
const linksBtn = [...document.querySelectorAll('.projects')];
linksBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentProject = viewProject();
    console.log(e);
    updateDOM(currentProject);
  });
});
