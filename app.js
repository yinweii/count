var days = document.getElementById("days");
 var hours = document.getElementById("hours");
 var minutes = document.getElementById("minutes");
 var seconds = document.getElementById("seconds");
 
 var currentYear = new Date().getFullYear();
 const newDate = new Date(`Jan 28 ${currentYear + 1} 00:00:00`);


 //update countdown
 function updateCount(){
    const currrentTime = new Date();
    const diff = newDate - currrentTime
    const d = Math.floor(diff / 1000 /60 /60  / 24);
    const h = Math.floor(diff / 1000 /60 /60)  % 24;
    const m = Math.floor(diff / 1000 /60 ) % 60 ;
    const s = Math.floor(diff / 1000) % 60 ;
    console.log(d);
    days.innerHTML =  d;
    hours.innerHTML = h;
    minutes.innerHTML = m < 10 ? '0' +m : m;
    seconds.innerHTML = s < 10 ? '0' +s : s;
   
 }
 setInterval(updateCount , 1000);
