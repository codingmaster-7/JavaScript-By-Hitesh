import fs from "fs";

const data=fs.readFileSync("test.txt","utf8");

console.log(data);

const newdata="And I also want to make my dream house and buy my favourite car by 2032.";

fs.writeFileSync("test.txt",data+newdata);
