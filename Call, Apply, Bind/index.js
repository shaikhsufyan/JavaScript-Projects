let data1 = {
    name:"sufyan",
    aga:20,
   details : function(detail){
    console.log( this.name + this.aga + detail);

   }
    
} 

let data2 = {
    name:"shaikh",
    aga:21,
    
} 
 
let data3 = {
    name:"sk",
    aga:18,
    
} 
 

data1.details.call(data2," CALL :: Call use for not repeating function ");
data1.details.apply(data3,[" APPLY :: Using Apply we can pass value through array :"]);
let bindMethod = data1.details.bind(data2, " BIND : Bind bind the function and ready to execute but when we double call then it Run ");
bindMethod();
 