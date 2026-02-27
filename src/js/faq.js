// functions

function showAnswer() {
  console.log("kliknul jsi");
}

// main code

const questionElements = document.querySelectorAll(".question");
const answerElements = document.querySelectorAll(".answer");

// console.log(questionElements, answerElements);

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
