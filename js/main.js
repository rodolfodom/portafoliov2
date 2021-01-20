import { formValidation } from "./modules/form.js";
import { logoToHome } from "./modules/headerLogo.js";
import { heroBtnsRoutes } from "./modules/heroBtns.js";
import { menu } from "./modules/menu.js";
import { showProjectDescription } from "./modules/projectsDescription.js";
import { renderProjects } from "./modules/projectsRenderer.js";
import { socialmediaRedirect } from "./modules/socialmediaLinks.js";
import { openProjectModal } from "./modules/projectModal.js";

const d = document;

d.addEventListener("DOMContentLoaded", async (e) => {
  menu();
  heroBtnsRoutes();
  logoToHome();
  formValidation();
  socialmediaRedirect();
  await renderProjects();
  showProjectDescription();
  openProjectModal();
});
