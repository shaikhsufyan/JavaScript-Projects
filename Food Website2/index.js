let reviewCard = document.querySelectorAll(".reviewCard");
let foodCard = document.querySelectorAll(".foodCard");

let count = 0;

reviewCard.forEach(function(card, index){
    card.style.left=`${index*100}%`
})

function myFun(){
    reviewCard.forEach(function(curCard){
        curCard.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == reviewCard.length ){
        count=0;
    }
    myFun();
}, 3000)



foodCard.forEach(function(food){
    food.addEventListener("click", function(){
        console.log(food);
         
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${food.firstElementChild.src} alt="">
        <p>Eact Best Eat Delicous</p> <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur possimus at reprehenderit, accusantium unde est nisi dolore laudantium repudiandae magni sed.</p>
        
        `
        
       document.querySelector("body").appendChild(div);
       document.getElementById("icon").addEventListener("click", function(){
        div.remove()
       })
    })
})