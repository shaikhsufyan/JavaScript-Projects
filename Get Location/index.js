 let getBtn = document.getElementById("getLocation");

 const gotLocation = (data) =>{
    console.log(data);
    
 }
 const failed = (data) =>{
    console.log(data);
    
 }
 getBtn.addEventListener("click", async()=>{
    await navigator.geolocation.getCurrentPosition(gotLocation, failed)
 })