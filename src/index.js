function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0ab14af0t2d26bb529691f1co34eda13";
  let prompt = `User instructions: Generate a Gothic style poem about this ${instructionsInput.value}`;
  let context =
    "You are a Gothic poem expert and you love to write short poems. Your mission is to generate a 4 line poem separated with a <br />. Only follow the user-intruction input to make the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem on its own line. each submit is a unique poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Gothic poem about ${instructionsInput.value} </div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
