var express = require('express'),
    app = express(),
    server = require('http').createServer(app).listen(4000,function(){
      console.log("@localhost:4000");
    }),
    router = require('./routes/index'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    papa = require('papaparse'),
    mongoclient = require("mongodb").MongoClient;

mongoclient.connect("mongodb://localhost:27017/hostels",function(err,db){
  if(err) return console.log(err);
  global.db = db
  db.collection('residents').drop();
  fs.readFile(__dirname+"/csv.csv",function(err,data){
    var csvString = data.toString();
    var results = papa.parse(csvString,{header:true}).data;
    results.forEach(data=>{db.collection('residents').save(data); console.log(data);})
  });
});

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/public/app')));
app.use('/',router);
