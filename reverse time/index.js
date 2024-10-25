const reversetime = (hour,minute,second) => {
    const intervel = setInterval(()=>{
        console.log(hour,minute,second);
        
        if(hour == 0 && minute == 0 && second == 0){
            clearInterval(intervel);
            return;
        }
        
        if(minute == 0 && second == 0 && hour > 0){
            minute = 59;
            second = 59;
            hour--;
        } 
        if(second == 0){
            minute--;
            second = 59;
        }

        second--;

        document.getElementById("hour").innerText = `hour : ${hour}`;
        document.getElementById("minute").innerText = `minute : ${minute}`;
        document.getElementById("second").innerText = `second : ${second}`;

    },1000)
}

reversetime(1,59,59);