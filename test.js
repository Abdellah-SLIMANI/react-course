function displayHours() {
    date = new Date;
    hours = addZeroOnRight(date.getHours())
    minutes = addZeroOnRight(date.getMinutes())
    seconds = addZeroOnRight(date.getSeconds())
    console.clear();
    console.log([hours, minutes, seconds].join(":"));
}

function addZeroOnRight(n) {
    return (n < 10 ? '0' : '') + n;
}

setInterval(displayHours, 1000)