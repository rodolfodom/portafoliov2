const d = document;

export function showProjectDescription() {
  let $projectDescription = d.querySelectorAll(".project-card aside");
  d.addEventListener("mouseover", (e) => {
    if (e.target.matches(".project-card")) {
      e.target.querySelector("aside").classList.remove("hidden");
    }
  });

  $projectDescription.forEach((el) => {
    el.addEventListener("mouseleave", (e) => {
      e.target.classList.add("hidden");
    });
  });
}
