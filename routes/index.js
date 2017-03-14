var router = require('express').Router();

router.get('/',function(req,res){
  res.render('index');
});

router.post('/resident',function(req,res){
  res.end();
  console.log("get:"+req.body.search);
});

module.exports = router;
