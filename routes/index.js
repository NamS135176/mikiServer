var express = require('express');
var router = express.Router();
let Pet = require('../model/pet')
let Food = require('../model/FoodModel')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/postpet',function(req, res, next){
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
              foodDescription: req.body.displayName,
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
router.post('/insertfood', (req, res, next) => {
  
  const newFood = new Food({
    name: req.body.name,
    foodDescription: req.body.foodDescription
  })

  newFood.save((err) => {
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
        data: {
          name: req.body.name,
          foodDescription: req.body.foodDescription,
          message:"insert new food success"
        }
      })
    }
  })
});
module.exports = router;
