let message = document.getElementById("message");
let showTime = document.getElementById("showTime");

let date = new Date();
let time = date.getHours();


setInterval(()=>{
    let date = new Date();
    let fullTime = date.toLocaleTimeString();
    showTime.innerHTML=fullTime;
}, 1000)
 
console.log(time);

// 1am to 11am good morning
// 12pm to 6 pm good afternoon
// 6 to 12 good night

if(time < 12 ){
    message.innerHTML="Good Morning";
    message.style.backgroundColor="rgb(130, 221, 221)"
}
else if(time >= 12 && time < 18 ){
    message.innerHTML="Good Afternoon";
    message.style.backgroundColor="rgb(255, 208, 0)"

     
}
else if(time >= 18 && time <= 24 ){
    message.innerHTML="Good Night";
     


}