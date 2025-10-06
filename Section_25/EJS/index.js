import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended : true}));

app.get("/challenge1",(req,res)=>{
    res.render("challenge1.ejs")
})
app.post("/submit",(req,res)=>{
    let letterCount = req.body["fName"].length+req.body["lName"].length;
    res.render("challenge1.ejs",{letterCount:letterCount});
});


app.get("/",(req,res)=>{

    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to work hard";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });
})

app.get("/loop",(req,res)=>{
    const data ={
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items:["apple","banana","cherry"],
        htmlContent:"<em>This is some em text</em>",
    };
    res.render("index1.ejs",data);
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}.`)
})