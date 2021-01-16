import { logoToHome } from "./modules/headerLogo.js";
import { heroBtnsRoutes } from "./modules/heroBtns.js";
import { menu } from "./modules/menu.js";
import { showProjectDescription } from "./modules/projectsDescription.js";
import { renderProjects } from "./modules/projectsRenderer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu();
  heroBtnsRoutes();
  logoToHome();
  renderProjects();
  setTimeout(showProjectDescription, 300);
});
