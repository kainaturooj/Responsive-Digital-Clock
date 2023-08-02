

setInterval(function(){

   const clock = document.querySelector(".timeDisplay")

let time = new Date();

let hours = time.getHours();

let minutes = time.getMinutes();

let seconds = time.getSeconds();

let day = "AM"

if (hours > 12) {

    day ="PM";

    hours = hours - 12;
    
}

if (hours == 0) {

    hours = 12;
    
}


if (hours < 10) {
        hours = "0" + hours


    }



if (minutes < 10) {

    minutes = "0" + minutes
    
   
    }

    if (seconds < 10) {

    seconds = "0" + seconds
    
 
    }

clock.innerHTML = hours + " : " +
    minutes + " : " + seconds + "  " + day


},50);



