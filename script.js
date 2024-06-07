const hourHandRotate = document.getElementsByClassName("hour")[0].style;
const minuteHandRotate = document.getElementsByClassName("minute")[0].style;
const secondHandRotate = document.getElementsByClassName("second")[0].style;

const footer = document.getElementsByClassName("footer")[0];

function changeTime() {
    
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hourHandRotate.transform = "rotateZ(" + (30 * hour + 0.5 * minute) + "deg)";
    minuteHandRotate.transform = "rotateZ(" + (6 * minute + 0.1 * second) + "deg)";
    secondHandRotate.transform = "rotateZ(" + (6 * second) + "deg)";

    footer.innerText = hour + ":" + minute + ":" + second;
}

changeTime();
setInterval(changeTime, 1000);