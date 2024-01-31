function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "dd5d4dt911e62a0b832b58o66f3ab4f3";
  let context =
    "You are a renowed chef worldwide and know how to put together quick and easy recipes that are delicious and healthy. Your mission is to gerenate a recipe in basic html. Make sure to follow user instructions below. Sign the recipe with SheCodes AI";
  let prompt = `User instructions are: Generate a delicious recipe that is quick and easy to make with ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
