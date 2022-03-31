var mongoose = require('mongoose')



var stateModel = mongoose.Schema({
    state_name:{type:String,require:true},
    country_name:{type:String,require:true},
});
var state = mongoose.model("states",stateModel);



// var cityModel = mongoose.Schema({
//     cityName:{type:String,require:true},
//     state_id:{type:mongoose.Schema.Types.ObjectId,ref:"state"},
// });
// var city = mongoose.model("citys",cityModel);

module.exports = state;