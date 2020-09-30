const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const a = document.getElementById("days");


const opining = "5 Oct 2020";

function countdown() {
    const opiningDate = new Date(opining);
    const currentDate = new Date();

    const totalSeconds = (opiningDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
  

    console.log( hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML =formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);


}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);