import express from "express";

const app=express();

app.use(express.json());

let users=[];

app.post('/users',(req,res)=>{
    users.push(req.body);
    console.log(users);
    res.status(201).json(req.body);
});

app.get('/users/:id',(req,res)=>{
    console.log(`Accessed users ${req.params.id}`);
    res.status(200).json(users.find(users=>users.id==req.params.id));
});

app.delete('/users/:id',(req,res)=>{
    console.log(`going to delete user ${req.params.id}`);
    let index=users.findIndex(user=>user.id==req.params.id);
    if(index==-1){
        return res.send("user not found");
    }
    users.splice(index,1);
    res.status(200).send("user deleted");
    console.log(`deleted user ${req.params.id}`);
    
});

app.listen(4000);
