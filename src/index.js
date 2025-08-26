function displayPoem(response) {
  console.log("poem generated");
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
  let prompt = `User instructions: Generate a Gothic poem about ${instructionsInput.ariaValueText}`;
  let context =
    "You are a Gothic poem expert and you love to write short poems. Your mission is to generate a 4 line poem separated with a <br />. Sign the poem with 'SheCodes AI' inside a <strong> element. each submit is a unique poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`prompt; ${prompt}`);
  console.log(`context; ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
