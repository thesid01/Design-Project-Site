var express = require('express');
var router = express.Router();
var story= require('../models/storyModel');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var newStory = {
    name: req.body.name,
    title: req.body.title,
    content: req.body.content,
    date: Date(),
    Rating: 0
  }
  console.log(newStory)
  story.create(newStory, (err)=>{
    if(err){
      console.log("Error occured While Creating story");
      res.send({"added":0});
    }else{
      console.log("story added");
      res.send({"added":1});
    }
  });
});

module.exports = router;
