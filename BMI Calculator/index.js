let button = document.getElementById("calculate");
let height = document.getElementById("height");
// let inch = document.getElementById("inch");
let weight = document.getElementById("weight");


button.addEventListener("click", function(){
    // formula :  kg/m*m
    let meter = height.value * 0.3048;
    let squareMeter = meter*meter;

    let weightVal = weight.value;
    let BMI = eval(weightVal/squareMeter)
    console.log(BMI.toFixed(2));
    document.getElementById("show").innerHTML="BMI : "+BMI.toFixed(2);

    if(BMI<18){
        document.getElementById("category").innerHTML="Under Weight";
        document.getElementById("category").style.backgroundColor="rgb(255, 208, 1)";

    }
    else if(BMI>=18 && BMI<=24){
        document.getElementById("category").innerHTML="Normal Weight";
        document.getElementById("category").style.backgroundColor="rgb(3, 209, 3)";


    }else if(BMI>=24 && BMI<=30){
        document.getElementById("category").innerHTML="Over Weight";
        document.getElementById("category").style.backgroundColor="rgb(255, 94, 0)";


    }else if(BMI>30){
        document.getElementById("category").innerHTML="Obese";
        document.getElementById("category").style.backgroundColor="red";


    }
  
})