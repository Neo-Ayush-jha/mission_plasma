// var plasmaDonorModel = require("../model/plasmaDonorModel");
// var cityModel = require("../model/cityModel");
// var stateModel = require("../model/stateModel");

// function cityForm(req,res) {
//     res.render('city');
// }

// function insertState(req,res){
//     var state = new stateModel({
//         state_id:req.body.city_id,
//         country_id:req.body.country_id,
//     });
//     state.save();
//     res.redirect("/cityForm")
// }
// function insertCity(req,res){
//     var city = new cityModel({
//         state_id:req.body.city_id,
//         city_id:req.body.state_id,
//     });
//     city.save();
//     res.redirect("/cityForm")
// }

// module.exports={
//     insertCity,
//     cityForm,
//     insertState,
// }