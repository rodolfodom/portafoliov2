const d = document,
  w = window;

export function logoToHome() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".headerLogo")) {
      w.location.hash = "inicio";
      w.location.hash = "";
    }
  });
}
