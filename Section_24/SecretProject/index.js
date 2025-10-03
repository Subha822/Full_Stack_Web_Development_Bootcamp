import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))

var unAuthorised = false

function secretMessage(req,res,next)
{
    if(req.body["password"] == 'ILoveProgramming')
    {
        unAuthorised = true
    }
    next()

}

app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/public/indexform.html")
})

app.use(secretMessage)

app.post("/check",(req,res) =>{
    if(unAuthorised)
    {
    res.sendFile(__dirname+"/public/index.html")
    }
    else
    {
        res.sendFile(__dirname+"/public/indexform.html")
    }
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})