//Hare Krishna Hare Ram

let counter=function(n){
      return function(){
            return n++;
      }
}
for(i=0;i<10;i++){
    let x=counter(10);
     console.log(x);
}
console.log("Pranjal");
