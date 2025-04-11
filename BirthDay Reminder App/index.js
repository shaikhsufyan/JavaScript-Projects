let dob = document.querySelectorAll("span");
let birthdayBtn = document.getElementById("birthdayBtn");


birthdayBtn.addEventListener("click", function(){
    
dob.forEach(function(date){
 



    let dates = new Date();
    let curDate = dates.getDate()
    console.log(date.innerHTML);

    let div = document.createElement("div");
    div.classList.add("birthdayList");
    div.innerHTML=date.parentElement.parentElement.parentElement.innerHTML;
     
    if(date.innerHTML == curDate){
          
        
        document.querySelector(".persons").innerHTML="";
        document.querySelector(".birthday").appendChild(div);
         
         
    }
    if(date.innerHTML != curDate){

        document.querySelector(".persons").innerHTML="";
        document.querySelector(".birthday").innerHTML="<h2>No BirthDay Today!</h2>"
    }
})

})