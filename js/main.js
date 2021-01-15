import { menu } from "./modules/menu.js";
import { renderProjects } from "./modules/projectsRenderer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu();
  renderProjects();
});
