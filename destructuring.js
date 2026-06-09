let user = { name: "Pranjal", age: 21 };

console.log(user);

console.log(user.name,user.age);

let {name, age} = user;
name="Kumar";
age="22";
console.log(name,age);
console.log(user.name,user.age);

const arr = [10, 20];
const [first, second] = arr;

console.log(first,second);