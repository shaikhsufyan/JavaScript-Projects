 
// let throt_num=0;
// let throt = true;
// const throtling = () =>{
//     if(throt === true){
//      console.log("Throtling ", throt_num++); 
//     document.getElementById("throt").innerHTML=`Throt : ${throt_num++}`

//      throt=false; 
//     setTimeout(()=>{
//      throt=true; 
//         console.log("Throtling ", throt_num++); 
//         document.getElementById("throt").innerHTML=`Throt : ${throt_num++}`

//     },1000)
//     }
     
// }
 
// let num=0;
// const normal = () =>{
//     console.log("Normal ",num++);
//     document.getElementById("normal").innerHTML=`Normal : ${num++}`
// }

// const myFun = () =>{
//     normal()
//     throtling()
// }





















//  let arr = [1,2,3,4,5,6];
//  let newArr = arr.map((curVal)=>{
//     return curVal*2
//  })
 

// // MAP METHOD POLYFILL()
//  Array.prototype.skMap = function(callback){
//     if(!callback){
//         throw Error("TypeError : Undefined is not a function")
//     }

//     let newAr = [];
//     let ar = this;
//     for(let i=0; i<ar.length; i++){
//         let result = callback(ar[i], i, ar);
//         newAr.push(result)
//     }
//     return newAr
//  }




// FILTER METHOD POLYFIL()

// let arr = [1,2,55,6,77,83,3,22];

// let result = arr.filter((curVal, index, arr)=>{
//     console.log(curVal>20);
//     return curVal>20
// })
 
// console.log(result);


// Array.prototype.skFilter = function(callback){
//     if(!callback){
//         throw Error("Type Error : undefined is not a function");
//     }

//     let newArray = [];
//     let arr = this;
//     for(let i=0; i<arr.length; i++){
        
//         let result = callback(arr[i], i, arr);
//         if(result){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;

// }




// FIND METHOD

// let arr = [1,2,4,6,7];

//  arr.find((cur, i, array)=>{
//     console.log(cur);
//  })


//  Array.prototype.skFind = function(callback){
//     if(!callback){
//         throw Error("undefined is not a function")
//     }
//     let arr = this;
//     // let newAr = [];
//     for(let i=0; i<arr.length; i++){
//         let result = callback(arr[i], i, arr)
//         if(result){
//             // newAr.push(arr[i])
//             return arr[i]
//         }
//     }
//     return undefined
//  }



// POLYFILL OF SOME

 

// Array.prototype.mySome = function(callback){
//     if(!callback){
//         throw Error("undefined is not function")
//     }
//     let arr =this;
//     for(let i=0; i<arr.length; i++){
//         let result = callback(arr[i], i, arr);
//         if(result){
//             return true
//         } 
         
//     }
//     return false
// }


// POLYFILL OF EVERY ::
// Array.prototype.myEvery = function(callback){
//     if(!callback){
//         throw Error("undefined is not function")
//     }
//     let arr =this;
//     for(let i=0; i<arr.length; i++){
//         let result = callback(arr[i], i, arr);
//         if(!result){
//             return false
//         } 
        
//     }
//     return true
    
// }




// REDUCE METHOD

let arr = [1,2,3];
let result = arr.reduce((accumulator, cur, i, array)=>{
    console.log(accumulator);
    console.log(cur);
    return  accumulator = accumulator + cur
},0)

console.log(result);

Array.prototype.myReduce = function(callback,initialValue){
    if(!callback){
        throw Error("undefined id not a fundtion")
    }
    let arr =this;
    
    for(let i=0; i<arr.length; i++){
        let result  = callback(initialValue, arr[i], i, arr);
        initialValue = result
    }
    return initialValue
}




// POLYFILL
// YOUTUBE VIDEO