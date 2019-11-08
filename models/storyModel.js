var mongoose= require("mongoose")
var storySchema = new mongoose.Schema({
	name: String,
    title:String,
    content:String,
    date: Date,
    Rating:Number
});

var story =mongoose.model("story",storySchema)

module.exports = story; 