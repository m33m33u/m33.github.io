// Clock function
function yourClock(){

    // Getting all handle elments
    var hourHand = document.getElementById("myhour");
    var minuteHand = document.getElementById("mymin");
    var secondHand = document.getElementById("mysec");

    
    function runClock(){
        // Getting current time
        var currentTime = new Date(); 

        // Getting hour handle degree based on decimal hour value calculated 
        // from current hour and curent minutes
        var hoursDegree = (currentTime.getHours()+ currentTime.getMinutes()/60) * 30 ; // 360/12
       
        //Getting minute handle degree  
        var minutesDegree = currentTime.getMinutes() * 6; // 360/60
        //Getting second handle degree  
        var secondsDegree = currentTime.getSeconds() * 6; // 360/60
    
        // Addint rotate attributes to handles
        hourHand.style.transform = "rotate("+hoursDegree+"deg)";
        minuteHand.style.transform = "rotate("+minutesDegree+"deg)";
        secondHand.style.transform = "rotate("+secondsDegree+"deg)";
    }

    // Starting runClock function
    runClock();

    // Removing animate class from handles after animation is finished
    setTimeout(function(){                 
        hourHand.classList.remove("animate");
        minuteHand.classList.remove("animate");
        secondHand.classList.remove("animate");
    }, 600); 

    
    // Setting clock interval for every second
    setInterval(runClock, 1000);
}




function myClock(){
    
        // Getting all handle elments
    var hourHand = document.getElementById("yourhour");
    var minuteHand = document.getElementById("yourmin");
    var secondHand = document.getElementById("yoursec");

    function runClock(){
        // Getting utc+2 time
        var myTime = new Date(); 

        // Getting hour handle degree based on decimal hour value calculated 
        // from current hour and curent minutes
        var hoursDegree = (myTime.getUTCHours() - 8 + myTime.getUTCMinutes()/60) * 30 ; // 360/12
       
        //Getting minute handle degree  
        var minutesDegree = myTime.getUTCMinutes() * 6; // 360/60
        //Getting second handle degree  
        var secondsDegree = myTime.getUTCSeconds() * 6; // 360/60
    
        // Addint rotate attributes to handles
        hourHand.style.transform = "rotate("+hoursDegree+"deg)";
        minuteHand.style.transform = "rotate("+minutesDegree+"deg)";
        secondHand.style.transform = "rotate("+secondsDegree+"deg)";
    }

    // Starting runClock function
    runClock();

    // Removing animate class from handles after animation is finished
    setTimeout(function(){                 
        hourHand.classList.remove("animate");
        minuteHand.classList.remove("animate");
        secondHand.classList.remove("animate");
    }, 600); 

    
    // Setting clock interval for every second
    setInterval(runClock, 1000);
}



// Start clock function
myClock("myclock");
yourClock("yourclock");


