// functions

function updateWeddingTimer() {
  const actualDate = new Date();
  const dateDifference = dateOfWedding - actualDate;
  if (dateDifference < 0) {
    return "";
  }
  const dayDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hourDifference = Math.floor((dateDifference / (1000 * 60 * 60)) % 24);
  const minuteDifference = Math.floor((dateDifference / (1000 * 60)) % 60);
  const secondsDifference = Math.floor((dateDifference / 1000) % 60);
  const [days, hours, minutes, seconds] = correctWordFormat(dayDifference, hourDifference, minuteDifference, secondsDifference);
  const formattedRemainingTime = dayDifference + days + hourDifference + hours + minuteDifference + minutes + " a " + secondsDifference + seconds;
  return formattedRemainingTime;
}

function correctWordFormat(days, hours, minutes, seconds) {
  const formattedDays = days > 4 || days === 0 ? " dní " : days !== 1 ? " dny " : " den ";
  const formattedHours = hours > 4 || hours === 0 ? " hodin " : hours !== 1 ? " hodiny " : " hodinu ";
  const formattedMinutes = minutes > 4 || minutes === 0 ? " minut " : minutes !== 1 ? " minuty " : " minutu ";
  const formattedSeconds = seconds > 4 || seconds === 0 ? " sekund " : seconds !== 1 ? " sekundy " : " sekundu ";
  return [formattedDays, formattedHours, formattedMinutes, formattedSeconds];
}

function timerStatusSetting() {
  if (updateWeddingTimer() === "") {
    stateElement.textContent = "se vzali";
    timerElement.textContent = "";
    clearInterval(timerInterval);
  } else {
    timerElement.textContent = "za " + updateWeddingTimer();
    if (stateElement.textContent === "") {
      stateElement.textContent = "se berou";
    }
  }
}

// main code

const dateOfWedding = new Date("2026-10-03T14:00:00");
const timerElement = document.querySelector(".timer");
const stateElement = document.querySelector(".wedding-state");
let timerInterval;

timerStatusSetting();

timerInterval = setInterval(timerStatusSetting, 1000);
