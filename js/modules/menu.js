const d = document,
  w = window;

export function menu() {
  let $menu = d.querySelector(".menu"),
    $menuBtn = d.querySelector(".menu-btn");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-btn") || e.target.matches(".menu-btn *")) {
      $menuBtn.firstElementChild.classList.toggle("none");
      $menuBtn.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    }

    if (e.target.matches(".menu a")) {
      $menu.classList.toggle("is-active");
      $menuBtn.firstElementChild.classList.toggle("none");
      $menuBtn.lastElementChild.classList.toggle("none");
      window.location.hash = "";
    }
  });
}
