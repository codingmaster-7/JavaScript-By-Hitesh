const user=[{id:1,name:"Pranjal Kumar"},{id:2,name:"Kamta Kumari"},{id:3,name:"Sunil Kumar Singh"}];

let getUserById=(id)=>{
    return user.find(user=>user.id===id);
}

console.log(getUserById(1));
console.log(getUserById(2));
console.log(getUserById(3));