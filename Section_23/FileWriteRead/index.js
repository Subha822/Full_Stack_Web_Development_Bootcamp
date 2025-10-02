const fs = require("fs");

fs.writeFile("filename.txt","Hello from NodeJs!",(err)=>
{
    if (err) throw err;
    console.log("The file has been saved!");
})

fs.readFile("./filename.txt",'utf8' ,(err, data) => {
  if (err) throw err;
  console.log(data);
}); 