var express = require('express');
var router = express.Router();
var story = require('../models/storyModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  story.find({ }).populate("story").exec(function(err,data){
    if(err){
      console.log(err)
    }else{
      console.log(data);
      res.render("forum", {story : data});
    }
  })
});

module.exports = router;
