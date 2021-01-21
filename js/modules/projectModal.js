const d = document;
import { PROJECTS } from "./projectsData.js";

export async function projectModal() {
  let $projectsCards = d.querySelectorAll(".project-card aside"),
    $modalProject = d.querySelector(".project-modal"),
    slideActive = 0,
    $slidesFragment = d.createDocumentFragment();

  for (let i = 0; i < $projectsCards.length; i++) {
    $projectsCards[i].addEventListener("click", (e) => {
      let index = $projectsCards[i].dataset.index;
      PROJECTS[index].images.forEach((el) => {
        let $slide = d.createElement("div"),
          $img = d.createElement("img");
        $slide.classList.add("slide");
        $img.src = el;
        $slide.appendChild($img);
        $slidesFragment.appendChild($slide);
      });
      $modalProject.querySelector(".project-modal-info").innerHTML = `
      <h4>${PROJECTS[index].name}</h4><br>
      <p>${PROJECTS[index].longDescription}.</p>
      <ul>
      <li><b>Tipo de proyecto:</b> ${PROJECTS[index].type}.</li>
      <li><b>Tecnologías:</b> ${PROJECTS[index].technologies}.</li>
      <li><b>Fecha:</b> ${PROJECTS[index].date}.</li>
      </ul>
      <a href= "${
        PROJECTS[index].figmaLink ? PROJECTS[index].figmaLink : ""
      }" target="_blank">${
        PROJECTS[index].figmaLink ? "Ver diseño en Figma" : ""
      }</a><br>
      <a href= "${
        PROJECTS[index].githubLink ? PROJECTS[index].githubLink : ""
      }" target="_blank">${
        PROJECTS[index].githubLink ? "Ver repositorio en GitHub" : ""
      }</a><br>
      <a href= "${
        PROJECTS[index].pageLink ? PROJECTS[index].pageLink : ""
      }" target="_blank">${PROJECTS[index].pageLink ? "Ir al proyecto" : ""}</a>
      `;
      $modalProject.querySelector(".slides").innerHTML = "";
      $modalProject.querySelector(".slides").appendChild($slidesFragment);
      $modalProject
        .querySelector(".slides")
        .children[1].classList.add("active");
      $modalProject.classList.remove("hidden");
    });
  }

  d.addEventListener("click", (e) => {
    if (
      e.target.matches("#close-modal") ||
      e.target.matches("#close-modal *")
    ) {
      slideActive = 0;
      $modalProject.classList.add("hidden");
    }

    if (
      e.target.matches("#prev") ||
      e.target.matches("#next") ||
      e.target.matches("#next *") ||
      e.target.matches("#prev *")
    ) {
      let slidesList = d.querySelectorAll(".slide");
      slidesList[slideActive].classList.remove("active");
      if (e.target.matches("#prev") || e.target.matches("#prev *")) {
        slideActive--;
        if (slideActive < 0) slideActive = slidesList.length - 1;
      } else if (e.target.matches("#next") || e.target.matches("#next *")) {
        slideActive++;
        if (slideActive > slidesList.length - 1) slideActive = 0;
      }
      slidesList[slideActive].classList.add("active");
    }
  });
}
