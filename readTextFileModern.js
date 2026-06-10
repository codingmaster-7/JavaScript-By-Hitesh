import {readFile} from "fs/promises";

const data = await readFile("test.txt","utf8");

console.log(data);