 let loader = document.querySelector(".loadPage");
 let container = document.querySelector(".container");
 let cards = document.querySelectorAll(".card");

 cards.forEach(function(card){
   card.addEventListener("click", function(){
      console.log(card);

      document.querySelector("body").innerHTML="";
      let div = document.createElement("div");
      div.classList.add("foodDetail");
      div.innerHTML=`
      <img src=${card.firstElementChild.src} alt="">
        <div class="detailText">
            <h1>Foods You Like</h1>
            <h2>Upto 40% OFF</h2>
            <p>Pay on delivery might be available</p>
            <p>Pay on delivery might be available</p>
            <p>Pay on delivery might be available</p>
            <p>Pay on delivery might be available</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>
      `
      document.querySelector("body").appendChild(div)
   })
 })

//  loading effect
 container.style.display="none";

   setInterval(function(){
      container.style.display="block";
     
         loader.style.display="none"
      },2000)

 