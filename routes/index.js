var express = require('express');
var router = express.Router();
let Pet = require('../model/pet')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postpet',function(req, res, next){
  const {accountName, displayName, birthday, sex, typePet} = req.body
  const newClass = new Pet({
    accountName: req.body.accountName,
    displayName: req.body.displayName
  })

  Pet.find({"accountName":req.body.accountName},(error,user) => {
    if(user.length == 0){
      newClass.save((err) => {
        if (err) {
          res.json({
            result: "failed",
            data: {},
            message:`error is: ${err}`
          })
        }
        else {
          res.json({
            result: "ok",
            message: '' + error
            ,
            data: {
              name: req.body.accountName,
              message:"insert new pet success"
            }
          })
        }
      })
    }
    else{
      res.json({
        result: "failed",
        data:{},
        message:`email exist`+ error
      })
    }
  })
})

router.get('/getPet/:accountName',(req, res, next) => {
  Pet.find({"accountName":req.params.accountName},(error,user) => {
    if(error){
      res.json({
        result: "failed",
        data:{},
        message:`email exist`+ error
      })
    }
    else{
      res.json({
        result: "ok"
        ,
        data: {
          user: user,
          message:"insert new pet success"
        }
      })
    }
  })
})

module.exports = router;
