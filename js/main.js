import { logoToHome } from "./modules/headerLogo.js";
import { heroBtnsRoutes } from "./modules/heroBtns.js";
import { menu } from "./modules/menu.js";
import { renderProjects } from "./modules/projectsRenderer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu();
  renderProjects();
  logoToHome();
  heroBtnsRoutes();
});
