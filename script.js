const hourHandRotate = document.getElementsByClassName("hour")[0].style;
const minuteHandRotate = document.getElementsByClassName("minute")[0].style;
const secondHandRotate = document.getElementsByClassName("second")[0].style;

let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

function changeTime() {
    if (second === 60) {
        second = 0;
        minute += 1;
    }

    if (minute === 60) {
        minute = 0;
        hour += 1;
    }

    if (hour >= 12) {
        hour = hour - 12;
    }

    hourHandRotate.transform = "rotateZ(" + (30 * hour + 0.5 * minute) + "deg)";
    minuteHandRotate.transform = "rotateZ(" + (6 * minute + 0.1 * second) + "deg)";
    secondHandRotate.transform = "rotateZ(" + (6 * second) + "deg)";
    
    console.log("rotateZ(" + 30 * hour + 0.5 * minute + "deg)");
    
    ++second;
    setTimeout(changeTime, 1000);
}

changeTime();