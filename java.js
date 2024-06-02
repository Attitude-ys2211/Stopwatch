let displayTimer = document.querySelector(".displaytimer");
let startBtn = document.getElementById("startbtn");
let stopBtn =  document.getElementById("stopbtn");
let resetBtn = document.getElementById("resetbtn");

let timerId = null;

let msec = 0;
let secs = 0;
let mins = 0;

let msecElement = document.getElementById('msec');
let secsElement = document.getElementById('secs');
let minsElement = document.getElementById('mins');

// startBtn.addEventListener("click",function(){
//     if(timerId !== null){
//         clearInterval(timerId);
//     }
//      timerId = setInterval (startTimer,10);
// })
startBtn.addEventListener('click', () => {
   if (timerId !== null) {
       clearInterval(timerId);
   }

   timerId = setInterval(startTimer, 10);

});
stopBtn.addEventListener('click', () => {
   
       clearInterval(timerId);
   }
);
resetBtn.addEventListener('click', () => {
      clearInterval(timerId);
      msec = 0;
       secs = 0;
       mins = 0;  
       updateDisplay();
   }
   
);
// stopBtn.addEventListener("click",function(){
//     clearInterval(timerId)});

// resetBtn.addEventListener("click",function(){
//         clearInterval(timerId);  
//         displayTimer.innerHTML = "00:00:00";
//     });
function startTimer (){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
    }
     if (secs==60){
        secs=0;
        mins++;
     }
     updateDisplay();
};

function updateDisplay() {
   let msecString = msec < 10 ? `0${msec}` : msec;
   let secsString = secs < 10 ? `0${secs}` : secs;
   let minsString = mins < 10 ? `0${mins}` : mins;
 
   msecElement.innerHTML = `${msecString}`;
   secsElement.innerHTML = `${secsString}`;
   minsElement.innerHTML = `${minsString}`;
}




// let msecString;
//  if(msec<10){
//     msecString=`0${msec}`;
//  }
//  else{
//     msecString="msec";
//  };
//  let secsString;
//  if(secs<10){
//     secsString=`0${secs}`;
//  }
//  else{
//     secsString="secs";
//  };
//  let minsString;
//  if(mins<10){
//     minsString=`0${mins}`;
//  }
//  else{
//     minsString="mins";
//  };
