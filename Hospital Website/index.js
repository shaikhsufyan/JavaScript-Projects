let branchs = document.querySelectorAll(".reviewCard");
let card = document.querySelectorAll(".card");
let crossBtn = document.getElementById("cross");


let icon = document.getElementById("icon");
let count = 0;

branchs.forEach(function(card, index){
    card.style.left=`${index*100}%`
})

function myFun(){
    branchs.forEach(function(crd){
        crd.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == branchs.length){
        count=0;
    }
    myFun();
},2000)


// darkmode
icon.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("toggle");
    if(icon.className == "fa-solid fa-moon"){
        icon.className="fa-solid fa-sun"
        icon.style.color="white"
    }else{
        icon.className="fa-solid fa-moon"
        icon.style.color="black"

    }
    
})

// speciality
card.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i  id="cross" onclick="clicked()" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h2>${curCard.lastElementChild.innerHTML}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa, ullam tempora dignissimos, quibusdam ab voluptatibus excepturi sint, nam reprehenderit tenetur neque placeat architecto. Sit?</p>

        `
        document.querySelector("body").appendChild(div)
    })
})

function clicked(){
document.querySelector(".detailCard").remove();
}
 