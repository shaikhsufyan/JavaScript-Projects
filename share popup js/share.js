let shareBtn = document.getElementById("share");
let output = document.getElementById("output");
let result = document.getElementById("result");


let data = {
    title:"Share CODE With Sufyan Shaikh",
    url:"https://www.lenskart.com/",
    text:"Share Channel"
}

shareBtn.addEventListener("click",function(){
    try{
        navigator.share(data)
        output.innerHTML="Link Shared!"

    }catch(err){
        console.log(err+"Succesfully Share");

    }

})


// Files
// let input = document.getElementById("files");
// let btn = document.getElementById("shareBtn");

 
// btn.addEventListener("click", async function(){

//     let files  = input.files;
//     if(files.length === 0){
//         result.innerHTML="Please select file";
//     }

//     if(!navigator.canShare){
//         result.innerHTML="Browser Not Support method";

//     }

//     let objData = {
//         files,
//         title:"File Sharing",
//         text:"file"
//     }
  
//     if(navigator.canShare({files})){
         
//         try{
//             await navigator.share({
//                 files,
//                 title:"Share File"
//             });
//             result.innerHTML="File Shared."
//         }catch(err){
//             result.innerHTML=err
//         }
         
//     }else{
//         result.innerHTML="File not"

//     }
// })