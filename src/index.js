function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Beneath the moon's cold, fractured eye, The ancient manor starts to sigh.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
