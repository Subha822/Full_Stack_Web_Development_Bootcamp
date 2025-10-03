import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath} from 'url';
import morgan from 'morgan';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000
//app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}))

var bandName = ""

function logger(req,res,next)
{
    console.log("Method",req.method);
    console.log("URL",req.url);
    next();
}

function bandNameGenerator(req,res,next)
{
    bandName = req.body["name"] + req.body["pet"]
    next();
}

app.use(logger)
app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/public/index.html")
})

app.use(bandNameGenerator)

app.post("/submit",(req,res) =>{
    //console.log(req.body)
    res.send(`<h1>Your Brand Name: </h1><p>${bandName}</p>`)
})
app.get("/index",(req,res) =>{
    res.send("<h1>Hello World</h1>")
})

app.get("/about",(req,res) =>{
    res.send("<h1>About Me</h1><p>My name is Subha</p>")
})

app.get("/contact",(req,res) =>{
    res.send("<h1>Contact Me</h1><p>+919442284531</p>")
})

app.post("/register",(req,res) =>{
    res.sendStatus(201)
})

app.put("/user/angela",(req,res) =>{
    res.sendStatus(200)
})
app.patch("/user/angela",(req,res) =>{
    res.sendStatus(200)
})

app.delete("/user/angela",(req,res) =>{
    res.sendStatus(200)
})




app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})