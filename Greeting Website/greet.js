let message = document.getElementById("message");
let showTime = document.getElementById("showTime");

let date = new Date();
let time = date.getHours();
console.log(time);

setInterval(()=>{
    let date = new Date();
    showTime.innerHTML=date.toLocaleTimeString();

},1000)

// 1am to 12pm good morning
// 12pm to 6pm good afternoon
// 6pm to 12am good night

if(time >=1 && time < 12){
    message.innerHTML="Good Morning";
}
else if(time >= 12 && time < 18){
    message.innerHTML="Good Afternoon";
    
}
else if(time >= 18 && time <=24){
    message.innerHTML="Good Night";

}