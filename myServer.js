var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express()

var myPort = 3000;

app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.render('index.html',{
        title: 'index'
    });
});
app.listen(myPort,'0.0.0.0')
console.log(`Server open at port ${myPort}`);