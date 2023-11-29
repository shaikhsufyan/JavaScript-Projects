let cart = document.getElementById("cart");
let viewBtn = document.querySelectorAll(".shopcard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a href="" class="cartHead">Cart is Empty</a>';

})
viewBtn.forEach(function(cart){
    cart.addEventListener("click", function(){
        
       let div = document.createElement("div");
       div.classList.add("card");
       div.innerHTML=`
       <img src=${cart.firstElementChild.src} alt="">
      <div>
      <h1>Trends at NZ's </h1>
      <h1>Only $22</h1>
      <br/>
      <p>Lorem ipsum dolor dolor sit amet.</p>
      <p>Lorem ipsum dolor dolor sit amet.</p>
      <p>Lorem ipsum dolor dolor sit amet.</p>
      <a href="">Shop Now</a>
      </div>
       `
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").appendChild(div)
    })
})