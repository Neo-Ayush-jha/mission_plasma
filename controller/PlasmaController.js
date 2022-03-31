var stateModel = require("../model/stateModel");
var cityModel = require("../model/cityModel");
const { response } = require("express");
var plasmaDonorModel = require("../model/plasmaDonorModel");
var plasmaRequesterModel = require("../model/plasmaRequesterModel");


// function cityForm(req,res) {
//     res.render('city');
// }
async function countData(req,res){
    var countDonor=await plasmaDonorModel.countDocuments(); 
    var countRequest=await plasmaRequesterModel.countDocuments(); 
    return[countDonor,countRequest];
    }
 async function home(req,res){
     [countDonor,countRequest] = await countData(req,res);
        res.render("home" );
 }
//  async function card(req,res){
//     //  var stateNmae = await stateModel.find({}).pop
//  }
async function cityForm(req,res){
    var data =  stateModel.find({},(error,response)=>{
        res.render("cityForm",{"state":response});
    });}
function insertState(req,res){
    var state = new stateModel({
        state_name:req.body.state_name,
        country_name:req.body.country_name,
    });
    state.save();
    res.redirect("/cityForm")

}
function insertCity(req,res){
    var city = new cityModel({
        cityName:req.body.cityName,
        state_id:req.body.state_id,
    });
    city.save();
    res.redirect("/cityForm");
    console.log(insertCity);
}

module.exports={
    home,
    insertCity,
    cityForm,
    insertState,
    countData,
}