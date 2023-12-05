let card = document.querySelectorAll(".reviewCard");
let icon = document.getElementById("icon");
let count = 0;
let surgery = document.querySelectorAll(".card");

card.forEach(function(cards, index){
    cards.style.left=`${index * 100}%`
})

function myFun(){
    card.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(card.length == count){
        count=0;
    }
    myFun()
}, 2000)



icon.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("mode");
    if(icon.className == "fa-solid fa-moon"){
        icon.className="fa-solid fa-sun"
    }
    else{
        icon.className = "fa-solid fa-moon"
    }
})

surgery.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard.firstElementChild.src);

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i id="cross" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>${curCard.lastElementChild.innerHTML}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error modi minima numquam. Repellendus culpa aut, minus earum ab aspernatur voluptates est.</p>

        `
        document.querySelector("body").appendChild(div)

        document.getElementById("cross").addEventListener("click", function(){
            div.remove();
        })
    })
})