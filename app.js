const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");
let dayDot = document.querySelector(".day-dot");
let hrDot = document.querySelector(".hr-dot");
let minDot = document.querySelector(".min-dot");
let secDot = document.querySelector(".sec-dot");


function getRemainingTime() {

    let newYear = new Date().getFullYear() + 1;
    let newYearTime = new Date(newYear, 00, 01, 00, 00);
    let todaysTime = new Date();

    const futureTime = newYearTime.getTime();
    let today = todaysTime.getTime();
    let t = futureTime - today;

    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;
    let oneSecond = 1000;

    let remainingDays = Math.floor(t / oneDay);
    let remainingHours = Math.floor((t - remainingDays * oneDay) / oneHour);
    let remainingMinutes = Math.floor((t - remainingDays * oneDay - remainingHours * oneHour) / oneMinute);
    let remainingSeconds = Math.floor((t - remainingDays * oneDay - remainingHours * oneHour - remainingMinutes * oneMinute) / oneSecond);

    function format(item) {
        if(item < 10) {
            item = `0${item}`;
        }
        return item;
    }

    year.innerHTML = newYear;
    days.innerHTML = format(remainingDays) + `<br><span>Days</span>`;
    hours.innerHTML = format(remainingHours) + `<br><span>Hours</span>`;
    minutes.innerHTML = format(remainingMinutes) + `<br><span>Minutes</span>`;
    seconds.innerHTML = format(remainingSeconds) + `<br><span>Seconds</span>`;

   dd.style.strokeDashoffset = 440 - (440 * remainingDays) / 365;
   hh.style.strokeDashoffset = 440 - (440 * remainingHours) / 24;
   mm.style.strokeDashoffset = 440 - (440 * remainingMinutes) / 60;
   ss.style.strokeDashoffset = 440 - (440 * remainingSeconds) / 60;

  
   dayDot.style.transform = `rotate(${remainingDays * (0.986)}deg)`;
   hrDot.style.transform =  `rotate(${remainingHours * (15)}deg)`;
   minDot.style.transform =  `rotate(${remainingMinutes * (6)}deg)`;
   secDot.style.transform =  `rotate(${remainingSeconds*(6)}deg)`;

}

setInterval(getRemainingTime, 1000);