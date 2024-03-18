 
//   for(let i=0; i<=5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
 
// }

function myFun(){
    for(var i=0; i<=5; i++){
        function set(i){
                setTimeout(()=>{
                    console.log(i);
                },i*1000)
             
            }
       
       set(i)
     
    }
}
myFun()