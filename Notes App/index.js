let addBtn = document.getElementById("add");
let addNoteForm = document.getElementById("addNote");
let crossIcon = document.getElementById("icon");
let addText = document.getElementById("addText");
let notes = document.getElementById("notes");
let textCard = document.querySelectorAll("myText")
 

addBtn.addEventListener("click", function(){
    addNoteForm.style.display="block";
    document.getElementById("tittle").value=""
    document.getElementById("discription").value="" 
     
})

crossIcon.addEventListener("click", function(){
    addNoteForm.style.display="none";

})

addText.addEventListener("click", function(){
    addNoteForm.style.display="none";
     
    let div = document.createElement("div");
    div.classList.add("myText");
    div.innerHTML=`
    <h2>${document.getElementById("tittle").value}</h2>
    <p>${document.getElementById("discription").value}</p>
    <button id="delete">Delete</button>
    `
     
    notes.appendChild(div);
    
     div.querySelector("#delete").addEventListener("click", function(){
       div.remove()
     })
})
  