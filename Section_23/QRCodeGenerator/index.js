//import inquirer from 'inquirer';
import input from '@inquirer/input';
import qr from 'qr-image';
import fs from 'fs';

const answer = await input({ message: 'Enter your website name: ' });
var qr_svg = qr.image(answer);
qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

fs.writeFile("filename.txt",answer,(err)=>
{
    if (err) throw err;
    console.log("The file has been saved!");
})