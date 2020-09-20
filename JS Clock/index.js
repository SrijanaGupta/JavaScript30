const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    //in order to change the seconds into the degrees in the clock, we first convert it
    //into percentage and then use it on the second hand
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourDegree}deg)`;
}

    setInterval(setDate,1000);