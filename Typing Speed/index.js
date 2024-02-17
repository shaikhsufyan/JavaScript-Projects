 let startBtn = document.getElementById("startBtn");
 let textInput = document.getElementById("textInput");
 let showText = document.getElementById("showText");
 let result = document.getElementById("speed");
 let showRandomData = document.getElementById("showRandomData");
 

let data = ["JavaScript is a scripting language enables ",
"It also enables users to load content ", "such as dropdown menus animated",
"A scripting language used to create ","How JavaScript Work and why JS famous"]
let randomNum = Math.random()*data.length;
let randomData = data[Math.floor(randomNum)] ;
console.log(randomData );
 


 let startTime;
 let endTime;

startBtn.addEventListener("click", function(){
    
    const endFun = () =>{
        // showText.innerHTML=textInput.value ;
        let time = new Date();
        endTime = time.getTime();
        let complitionTime = Math.floor((endTime-startTime)/1000);
        // showText.innerHTML=textInput.value ;
        let wordLength = textInput.value.split(" ").length;
        let speed = Math.round((wordLength/complitionTime)*60)
        console.log(textInput.value.split(" "));
        console.log(wordLength);
        console.log(speed);
        result.innerHTML=" you write"+" "+wordLength+" word in"+" "+complitionTime+" seconds"+" : your typing speed "+speed+ " word per minute" ;

    }
 
    if(startBtn.innerText == "Start"){
        textInput.disabled=false
        textInput.style.backgroundColor="white"
        startBtn.innerText="Done"
        let time = new Date();
        startTime = time.getTime();
        showRandomData.innerHTML=randomData
        
    }
    else if(startBtn.innerText == "Done"){
        textInput.disabled=true;
        startBtn.innerText="Start"
        textInput.style.backgroundColor="rgb(230, 230, 230)"

        endFun()

    }
})
 