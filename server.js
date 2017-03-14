var express = require('express'),
    app = express(),
    server = require('http').createServer(app).listen(4000,function(){
      console.log("@localhost:4000");
    }),
    router = require('./routes/index'),
    path = require('path'),
    bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/public/app')));
app.use('/',router);
