// functions

function showAnswer(e) {
  const answer = e.target.nextSibling;
  answer.style.display = "block";
}

// main code

const questionElements = document.querySelectorAll(".question");
const answerElements = document.querySelectorAll(".answer");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
