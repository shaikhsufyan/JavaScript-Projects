let trendCard = document.querySelectorAll(".trendCard");
let shopCard = document.querySelectorAll(".shopCard");

let count = 0 ;

trendCard.forEach(function(card, index){
    card.style.left=`${index * 100}%`
})

function myFun(){
    trendCard.forEach(function(curCard){
        curCard.style.transform=`translateX(-${count * 100}%)`;
    })
}
setInterval(function(){
    count++;
    if(count == trendCard.length){
        count=0;
    }
    myFun()
},3000)


shopCard.forEach(function(shop){
    shop.addEventListener("click", function(){
        console.log(shop);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${shop.firstElementChild.src} alt="">
        <div>
            <p class="textHead">Wear Best With Shopping Cart</p>
            <br>
            <p>Size</p>
            <input type="number" placeholder="Select">
            <br>
            <p>Quantity</p>
            <input type="number" value="1">
            <button>Add To Cart</button>
        </div>
        `

        document.querySelector("body").appendChild(div);
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})