var express = require('express'),
    app = express(),
    server = require('http').createServer(app).listen(4000,function(){
      console.log("@localhost:4000");
    }),
    router = require('./routes/index');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/',router);
