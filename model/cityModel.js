var mongoose = require('mongoose')

var cityModel = mongoose.Schema({
    cityName:{type:String,require:true},
    state_id:{type:mongoose.Schema.Types.ObjectId,ref:"states"},
});
var city = mongoose.model("citys",cityModel);
module.exports = city;