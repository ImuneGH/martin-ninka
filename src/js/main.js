// functions

function updateWeddingTimer() {
  const dateOfWedding = new Date("2026-10-03T14:00:00");
  const actualDate = new Date();
  const dateDifference = dateOfWedding - actualDate;
  const dayDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hourDifference = Math.floor((dateDifference / (1000 * 60 * 60)) % 24);
  const minuteDifference = Math.floor((dateDifference / (1000 * 60)) % 60);
  const secondsDifference = Math.floor((dateDifference / 1000) % 60);
  const formattedRemainingTime = dayDifference + " dní " + hourDifference + " hodin " + minuteDifference + " minut " + secondsDifference + " sekund ";
  return formattedRemainingTime;
}

// main code

const timerElement = document.querySelector(".timer");
timerElement.textContent = updateWeddingTimer();

setInterval(() => {
  timerElement.textContent = updateWeddingTimer();
}, 1000);
