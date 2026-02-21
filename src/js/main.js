// functions

function updateWeddingTimer() {
  const dateOfWedding = new Date("2026-10-03T14:00:00");
  const actualDate = new Date();
  const dateDifference = dateOfWedding - actualDate;
  const dayDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hourDifference = Math.floor((dateDifference / (1000 * 60 * 60)) % 24);
  const minuteDifference = Math.floor((dateDifference / (1000 * 60)) % 60);
  const secondsDifference = Math.floor((dateDifference / 1000) % 60);
  const [days, hours, minutes, seconds] = correctWordFormat(dayDifference, hourDifference, minuteDifference, secondsDifference);
  const formattedRemainingTime = dayDifference + days + hourDifference + hours + minuteDifference + minutes + secondsDifference + seconds;
  return formattedRemainingTime;
}

function correctWordFormat(days, hours, minutes, seconds) {
  const formattedDays = days > 4 || days === 0 ? " dní " : days !== 1 ? " dny " : "den";
  const formattedHours = hours > 4 || hours === 0 ? " hodin " : hours !== 1 ? " hodiny " : " hodina ";
  const formattedMinutes = minutes > 4 || minutes === 0 ? " minut " : minutes !== 1 ? " minuty " : " minuta ";
  const formattedSeconds = seconds > 4 || seconds === 0 ? " sekund " : seconds !== 1 ? " sekundy " : " sekunda ";
  return [formattedDays, formattedHours, formattedMinutes, formattedSeconds];
}

// main code

const timerElement = document.querySelector(".timer");
timerElement.textContent = "za " + updateWeddingTimer();

setInterval(() => {
  timerElement.textContent = "za " + updateWeddingTimer();
}, 1000);
