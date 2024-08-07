 let addBtn = document.getElementById("add");
 let showBtn = document.getElementById("show");
let head = document.getElementById("heading")
 let input = document.getElementById("input");

 showBtn.addEventListener("click", ()=>{
    const myData = localStorage.getItem("name")
    head.innerText=myData
 })
 addBtn.addEventListener("click", ()=>{
    const value = input.value;
    localStorage.setItem("name", value)

 })