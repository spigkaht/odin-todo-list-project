import "./styles.css";
import { changePriority } from "./changePriority";
import { createTodo } from "./createTodo";
import { deleteTodo } from "./deleteTodo";
import { expandTodo } from "./expandTodo";
import { markComplete } from "./markComplete";
import { updateDOM } from "./updateDOM";
import { viewAllProjects } from "./viewAllProjects";
import { viewProject } from "./viewProject";

// for testing
console.log("hello world");
changePriority();
createTodo();
deleteTodo();
expandTodo();
markComplete();
updateDOM();
viewAllProjects();
viewProject();

// assign current project click and run DOM update
const linksBtn = document.querySelectorAll(".projects");
linksBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const currentProject = viewProject();
    console.log(currentProject);
    updateDOM(currentProject);
  });
});