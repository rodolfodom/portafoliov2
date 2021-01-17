const d = document,
  w = window;

export function socialmediaRedirect() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".redirect figure")) {
      w.open(e.target.dataset.href, "_blank");
    } else if (e.target.matches(".redirect *")) {
      w.open(e.target.parentElement.dataset.href, "_blank");
    }
  });
}
