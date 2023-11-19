let btns = document.querySelectorAll(".btn");
let submit = document.getElementById("submit");


btns.forEach(function(buttons){
    buttons.addEventListener("click", function(){
        console.log(buttons.attributes.id.value);

        if(buttons.attributes.id.value == "ui"){
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("webDesign").style.display="none";
            document.getElementById("android").style.display="none";

        }
        if(buttons.attributes.id.value == "web"){
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("webDesign").style.display="block";
            document.getElementById("android").style.display="none";

        }
        if(buttons.attributes.id.value == "mobile"){
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("webDesign").style.display="none";
            document.getElementById("android").style.display="block";

        }
        if(buttons.attributes.id.value == "all"){
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("webDesign").style.display="block";
            document.getElementById("android").style.display="block";

        }
    })
})

function downlodeBtn(){
    alert("CV Downloded")
}

submit.addEventListener("click", function(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");

    if(name.value == "" || email.value == "" || msg.value == ""){
        alert("Please Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }

})