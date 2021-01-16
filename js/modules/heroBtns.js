const d = document,
  w = window;

export function heroBtnsRoutes() {
  d.addEventListener("click", (e) => {
    if (e.target.matches("#hero-contact-btn")) {
      w.location.hash = "contactame";
    }

    if (e.target.matches("#hero-cv-btn")) {
      w.open(
        "http://localhost:5500/assets/documents/dominguezRodolfo.pdf",
        "_blank"
      );
    }
  });
}
