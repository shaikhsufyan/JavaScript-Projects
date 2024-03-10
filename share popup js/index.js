// share pop
// let btn = document.getElementById("click");
// let showData = document.getElementById("showData");

// const data ={
//     title : "Sharing data yaar.",
//     dis:"Yes here is data share right now",
//     url : "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share"
// }

 
// btn.addEventListener("click", async function(){
//     try{
//         await navigator.share(data);
//         showData.innerHTML="shared succesfully"
//     }catch(err){
//         console.log(err,"Opps Error");
//     }
// })







// share files
// navigator.canShare() => used for file share 
// navigator.share() used for link share text


// let input = document.getElementById("files");
// let btns = document.getElementById("btns");
// let output = document.getElementById("output");
  
// shareFile.addEventListener("click",   async function(){
//     let files = input.files;
//     console.log(files);
//     if(files.length === 0){
//         output.innerHTML="Please choose File";
//     }

//     if(!navigator.canShare){
//         output.innerText="You Browser not support canShare web API "
//     }

//     if(navigator.canShare({files})){
//         try{
//             await navigator.share({
//                 files,
//                 title:"Sharing File",
//                 text:"file share ::"

//             })

//         }catch(err){
//             output.innerHTML=err
//         }
//     }else{
//         output.innerText="Your system not support"
//     }


// })