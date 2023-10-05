const datEl =document.getElementById("days")
const hoursEl =document.getElementById("hours")
const minsEl =document.getElementById("mins")
const secondEl =document.getElementById("seconds")


const newYear = "1 jan 2024"


function countdown (){
    const newYeardate = new Date(newYear);
    const currenDate = new Date();
    const toTol =(newYeardate - currenDate)/1000;
   

    const days =Math.floor(toTol/3600/24);
    const hours =Math.floor(toTol/3600)%24;
    const mins =Math.floor(toTol/60)%60;
    const seconds =Math.floor(toTol)%60;
    console.log(days,hours,mins,seconds);


    datEl.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours)
    minsEl.innerHTML=formatTime(mins)
    secondEl.innerHTML=formatTime(seconds)
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown,1000)