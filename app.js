//DOM Methods
const formContainer = document.getElementById("formcontainer");
const timeLeft = document.getElementById("time-left");
const form = document.getElementById("form");
const countDownTimer = document.getElementById("countdown");
const DaysLeft = document.getElementById("days");
const HoursLeft = document.getElementById("hours");
const MinutesLeft = document.getElementById("minutes");
const SecondsLeft = document.getElementById("seconds");

//Makes Container Visible
const showContainer = () => {
  formContainer.style.visibility = "visible";
};

//Submission Date
const submissionDate = new Date("12/13/2022 12:18");

//Conversions
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let timerId; //Global Variable

//The Whole Countdown Function
const countDown = () => {
  const today = new Date();
  const timeSpan = submissionDate - today;

  if (timeSpan <= -second || timeSpan <= 0) {
    setTimeout("showContainer()", 2000); //The Form Container Renders 2 Seconds After The Page Reloads
    form.classList.add("hidden"); //Hides The Form
    countDownTimer.classList.add("hidden"); //Hides The Countdown Timer
    timeLeft.innerHTML = "The Report Submission deadline has ended."; //Message After The Time Exceeds
    clearInterval(timerId); //This Clears The Timer

    return;
  } else {
    setTimeout("showContainer()", 0000);
    form.classList.add("visible");
    countDownTimer.classList.add("visible");
  }

  //Conversions

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  //Set/Assign to the DOM
  DaysLeft.innerHTML = days;
  HoursLeft.innerHTML = hours;
  MinutesLeft.innerHTML = minutes;
  SecondsLeft.innerHTML = seconds;
};

timerId = setInterval(countDown, second);
