const d = document;

export function menu() {
  let $menu = d.querySelector(".menu"),
    $menuBtn = d.querySelector(".menu-btn");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-btn") || e.target.matches(".menu-btn *")) {
      $menuBtn.firstElementChild.classList.toggle("none");
      $menuBtn.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    }
  });
}
