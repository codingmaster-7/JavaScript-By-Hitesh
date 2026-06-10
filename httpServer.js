import http from "http";

const server=http.createServer((respect,restore)=>{
     if(respect.url==='/'){
        restore.end("Home");
     }
     else if(respect.url==='/about'){
        restore.end("About");
     }
     else{
        restore.end("404"); 
     }
});

server.listen(5000,()=>{
     console.log("Server is running");
});