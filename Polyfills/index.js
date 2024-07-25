 



 let arr = [1,2,3,4,5,6];
 let newArr = arr.map((curVal)=>{
    return curVal*2
 })
 

// MAP METHOD POLYFILL()
 Array.prototype.skMap = function(callback){
    if(!callback){
        throw Error("TypeError : Undefined is not a function")
    }

    let newAr = [];
    let ar = this;
    for(let i=0; i<ar.length; i++){
        let result = callback(ar[i], i, ar);
        newAr.push(result)
    }
    return newAr
 }




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

// let arr = [1,2,3];
// let result = arr.reduce((accumulator, cur, i, array)=>{
//     console.log(accumulator);
//     console.log(cur);
//     return  accumulator = accumulator + cur
// },0)

// console.log(result);

// Array.prototype.myReduce = function(callback,initialValue){
//     if(!callback){
//         throw Error("undefined id not a fundtion")
//     }
//     let arr =this;
    
//     for(let i=0; i<arr.length; i++){
//         let result  = callback(initialValue, arr[i], i, arr);
//         initialValue = result
//     }
//     return initialValue
// }












// CALL METHOD

// let obj = {
//     name:"Sufyan",
//     prof:"SE"
// }

// function myFun(age, country){
//     console.log(this.name,age, country);
// }
 
//   myFun.call(obj,"india");


//   Function.prototype.myCall = function(context, ...argument){
//     if(typeof this != "function"){
//         throw Error(this, "not a callable function")
//     }
//     context.fun=this;
//     context.fun(...argument)
//   }







// APPLY METHOD 

// myFun.myApply(obj, ["20","India"]);
// Function.prototype.myApply = function(context, args){
//     if(typeof this != "function"){
//         throw Error("not a callable function")
//     }
//     context.fun=this;
//     context.fun(...args)
// }








// BIND METHOD 
//  let res = myFun.bind(obj, 20,"INDIA")
 
//  Function.prototype.myBind = function(context, ...args){
//     // console.log(this)=>this target function which we are call on object
//     if(typeof this != "function"){
//         throw Error("not a callable function")
//     }
//        context.fun=this;
//        return function(variableArgument){
//         context.fun(...args, variableArgument)
//        }
//  }


// let arr = [[1,2],[[3,5]],6]; 
// let arrs = " " 

// [1,2,3,4,5]
// let rs = arr.flat(2);
// console.log(Array.isArray(arrs));
// console.log(rs);


// POLYFILL
// YOUTUBE VIDEO





// let nums = [1,1,2,2,3,4];

// let num1 = [null];
// console.log(num1.length);
// let num2 = [null];

 
// for(let i=0; i<nums.length; i++){
//     if(num1[i] == cur){
//         console.log(no);
//      }
// }
     
 

// console.log(rs);







// let res = nums.filter((cur,i, arr)=>{
//     return cur != arr[i+1]
//     if(cur != arr[i+1]){

//     }

// })
// console.log(res);




 
 
// for(let i=0; i<nums.length; i++){

//          if(num1[i] === nums[i]){
//             console.log(nums[i]);
//             num1.push(nums[i])
//          } 
//          if(num1[i] != nums[i]){
//             console.log(nums[i]);
//             num2.push(nums[i])

//          } 
             
// }

 
//   console.log(num1);
//   console.log(num2);














 