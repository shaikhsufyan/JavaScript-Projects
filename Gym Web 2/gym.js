 let trains = document.getElementById("trains");
 let connects = document.getElementById("connects");
 let members = document.getElementById("members");
 let programs = document.getElementById("programs");


 let mainBtn = document.getElementById("mainBtn");
 mainBtn.addEventListener("click", function(){
    // document.querySelector(".join").style.display="block";
    document.querySelector(".join").classList.toggle("showForm")

 })


 let join = document.getElementById("join");

 join.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let num = document.getElementById("num");


    if(email.value == "" && pass.value == "" && num.value == ""){
        alert("please Enter Email Password and Number")
    }else{
        alert("Thanks You Logged IN");
    document.querySelector(".join").style.display="none";

    }

 })


//  slide

let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");

let count = 0 ;

slide.forEach(function(slides, index){
   slides.style.left=`${index * 100}%`
})

function myFun(){
   slide.forEach(function(curVal){
       curVal.style.transform=`translateX(-${count * 100}%)`
   })
}

setInterval(function(){
   count++;
   if(count == slide.length){
       count=0
   }
   myFun();
   
}, 2000)

// connect js

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){

    let name = document.getElementById("name");
    let pass = document.getElementById("pass");

    
    if(name.value == "" && pass.value == ""){
        alert("please Enter Name and Password")
    }else{
        alert("Thanks for Connecting");
     

    }
})