const fs = require("fs");
const path = require('path');

const textin = fs.readFileSync("txt/input.txt","utf-8");
console.log(textin);

const textout = "i know this about avacados:"+textin;

fs.writeFileSync("txt/output.txt",textout);