let cards = document.querySelectorAll(".card");
let cartNum = document.getElementById("cartNum")
let submitBtn = document.getElementById("submitBtn")
let cartIcon = document.getElementById("cartIcon");


let num = 0;

cartIcon.addEventListener("click", function(){
    console.log("ssssss");
    document.querySelector(".cartItems").style.display="none";

})

let cartItem = document.querySelector(".cartItems");
cartItem.style.display="none";

cards.forEach(function(card){

    card.addEventListener("click", function(){
        console.log(card);
        document.querySelector(".cartItems").style.display="block"
        let div = document.createElement("div");
        div.classList.add("cartList");
        div.innerHTML=`
        <i class="fa-solid fa-xmark" onclick="remove()"></i>
        <img src=${card.firstElementChild.src}>
        <p>$199<p/>
        `
       cartItem.appendChild(div)

        num++;
        cartNum.innerHTML=num;


     
    })
})
 
 function remove(){
    num--;
    let cartList = document.querySelectorAll(".cartList");
console.log(cartList);
cartList.forEach(function(currentItems){
    currentItems.addEventListener("click", function(){
        
        if(num == 0){
            cartItem.style.display="none"
        }
            currentItems.style.display="none"
             
            cartNum.innerHTML=num;

        
         
        // console.log(currentItems.style.display="none");
    })
    console.log(currentItems);

})
 }
 









 submitBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Enter Email and Password");
    }else{
        alert("Thnaks You Logged In");
    }

 })