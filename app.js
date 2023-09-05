const express = require('express')
const cors = require("cors");
const http = require("http");
const path = require("path");
const bodyParser = require('body-parser');
const app = express()
var mysql = require('mysql');
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.listen(3000,()=>{
  console.log("connect...");
})



// ******** restapi start *********

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./src/form/Form.html'));
});

app.post('/login', function(req,res){
  console.log(req.body);
  // res.send("data send")
  res.sendFile(path.join(__dirname,'./src/Home/index.js'));
});