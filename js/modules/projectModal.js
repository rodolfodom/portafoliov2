const d = document;

export async function openProjectModal() {
  let $projectsCards = d.querySelectorAll(".project-card aside"),
    $modalProject = d.querySelector(".project-modal");

  for (let i = 0; i < $projectsCards.length; i++) {
    $projectsCards[i].addEventListener("click", (e) => {
      $modalProject.classList.remove("hidden");
    });
  }

  d.addEventListener("click", (e) => {
    if (
      e.target.matches("#close-modal") ||
      e.target.matches("#close-modal *")
    ) {
      $modalProject.classList.add("hidden");
    }
  });
}
