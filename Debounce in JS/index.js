 let count = 0;
 const getData = () =>{
    console.log("Running",count++);
 }
console.log(this);
 const debounce = (fun, time) =>{
    let timer;
    return function(){
        let target = this,
        args = arguments;
        // console.log(target);
        // console.log(args);
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fun.apply()
        },time)
    }
 }

 const calling = debounce(getData,500)