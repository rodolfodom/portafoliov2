const d = document;

export function formValidation() {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches("#contact-form [required]")) {
      let pattern = e.target.pattern || e.target.dataset.pattern,
        regexp = new RegExp(pattern);

      if (e.target.value == "") {
        e.target.nextElementSibling.textContent = "Este campo es obligatorio";
        e.target.nextElementSibling.style.display = "block";
      } else if (!regexp.test(e.target.value)) {
        e.target.nextElementSibling.textContent = e.target.title;
        e.target.nextElementSibling.style.display = "block";
      } else {
        e.target.nextElementSibling.style.display = "none";
      }
    }
  });

  d.addEventListener("submit", async (e) => {
    if (e.target.matches("#contact-form")) {
      e.preventDefault();
      try {
        let data = new FormData(d.getElementById("contact-form")),
          options = {
            method: "POST",
            body: data,
          },
          response = await fetch(
            "https://formsubmit.co/ajax/rodolfodom7@gmail.com",
            options
          );
        if (!response.ok) throw response;
        d.querySelector(".thanks").style.display = "flex";
        setTimeout(() => {
          d.querySelector(".thanks").style.display = "none";
        }, 7000);
      } catch (err) {
        console.log(response);
      }
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#close-thanks")) {
      d.querySelector(".thanks").style.display = "none";
    }
  });
}
