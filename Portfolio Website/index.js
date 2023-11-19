let btns = document.querySelectorAll(".category");
let submit = document.getElementById("submit");

btns.forEach(function(btn){
    btn.addEventListener("click", function(){
         
        if(btn.attributes.id.value == "ui"){
            document.getElementById("webDesign").style.display="none";
            document.getElementById("androidDesign").style.display="none";
            document.getElementById("uiDesign").style.display="block";


        }
        if(btn.attributes.id.value == "web"){
            
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("androidDesign").style.display="none";
            document.getElementById("webDesign").style.display="block";
            // document.getElementById("androidDesign").style.display="none";

        }
        if(btn.attributes.id.value == "android"){
            document.getElementById("webDesign").style.display="none";
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("androidDesign").style.display="block";

        }
        if(btn.attributes.id.value == "all"){
            document.getElementById("webDesign").style.display="block";
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("androidDesign").style.display="block";

        }
             
    })
})
function downlodeBtn(){
    alert("CV Downloded")
}

submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let msg = document.getElementById("msg");

    if(email.value == "" || name.value == "" || msg.value == "" ){
        alert("Please Fill Details")
    }else{
        alert("Succesfully Connected")
    }

})