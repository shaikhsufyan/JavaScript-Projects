let height = document.getElementById("height");
let weight = document.getElementById("weight");
let show = document.getElementById("show");
let category = document.getElementById("category");
let calculate = document.getElementById("calculate");
let relode = document.getElementById("relode");


// formula kg/m*m
calculate.addEventListener("click", function () {

    if (height.value == "" && weight.value == "") {
        alert("Please Enter Weight & Height ")
    }
    else {

        let meter = height.value * 0.3048;
        let squareMeter = meter * meter;
        let bmi = eval((weight.value / squareMeter).toFixed(2));
        console.log(bmi);
        document.getElementById("show").innerHTML = "Your BMI is : " + bmi;

        if (bmi < 18) {
            document.getElementById("category").innerHTML = "You are Underweight";
        }
        else if (bmi >= 18 && bmi < 24) {
            document.getElementById("category").innerHTML = "You are Normal Weight";

        }
        else if (bmi >= 24 && bmi < 30) {
            document.getElementById("category").innerHTML = "You are Above Weight";

        } else {
            document.getElementById("category").innerHTML = "You are Obese";

        }
    }
 
})

relode.addEventListener("click", function () {
    window.location.reload()
})


