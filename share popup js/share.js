 let button = document.getElementById("shareBtn");
 let result = document.getElementById("result");

 let data = {
    title:"CODE With Sufyan Shaikh",
    url:"https://www.youtube.com/results?search_query=code+with+sufyan",
    text:"my channel"
 }

 button.addEventListener("click", function(){
    try{
        navigator.share(data)
        result.innerHTML="Link Shared"
    }catch(err){
        console.log(err);
        result.innerHTML="Error in Share"

    }
 })
