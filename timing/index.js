let time = document.getElementById('time');
let day = document.getElementById('day');

const clock = () => {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (hours > 12) {
        hours = hours % 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    time.innerHTML = `${hours} : ${minutes} : ${seconds}`;

    let Dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const days = Dayname[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    day.innerHTML = `${days}, ${date} ${month} ${year}`;


    setTimeout(() => {
        clock();
    }, 1000);
}

clock()