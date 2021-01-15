import { PROJECTS } from "./projectsData.js";
const d = document,
  $container = d.querySelector(".projects-container");
let $template = d.getElementById("project-template").content,
  $fragment = d.createDocumentFragment();

export function renderProjects() {
  for (let i = 0; i < PROJECTS.length; i++) {
    let base = PROJECTS[i];
    $template.querySelector("h4").textContent = base.name;
    $template.querySelector("p").textContent = base.shortDescription;
    $template.querySelector(
      "article"
    ).style.backgroundImage = `url(${base.mainImg})`;

    let clone = d.importNode($template, true);
    $fragment.appendChild(clone);
  }
  $container.appendChild($fragment);
}
