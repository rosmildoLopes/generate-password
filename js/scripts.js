//elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordButton = document.querySelector("#generated-password");
 // functions

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10 ).toString();
};

//events

generatePasswordButton.addEventListener("click", () => {
  console.log("teste")
})