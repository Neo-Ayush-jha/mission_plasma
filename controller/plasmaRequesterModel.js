var plasmaRequesterModel = require("../model/plasmaRequesterModel");
var cityModel = require("../model/cityModel");
var stateModel = require("../model/stateModel");

function requesterForm(req,res) {
    // res.render('plasmaRequester');
    var data =  stateModel.find({},(error,response)=>{
        res.render("plasmaRequester",{"state":response});
    });

}

function viewRequester(req,res){
    var id = req.params.id;
    plasmaRequesterModel.findOne({_id:id},(error,response)=>{
        res.render("viewRequester",{'requester':response})
    })
    // var data =  stateModel.find({},(error,response)=>{
    //     res.render("viewDonor",{"state":response});
    // });
}


// var data =  stateModel.find({},(error,response)=>{
//     res.render("plasmaRequester",{"state":response});
// });
function insertRequester(req,res){
    var requester = new plasmaRequesterModel({
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        phone_no:req.body.phone_no,
        bloodGroup:req.body.bloodGroup,
        cpd:req.body.cpd,
        cnd:req.body.cnd,
        city_id:req.body.city_id,
        state_id:req.body.state_id,
    });
    requester.save();
    res.redirect("/");
    console.log(requester)
}
async function manageRequester(req, res){
    var data = await plasmaRequesterModel.find({}).populate("state_id");
    res.render("manageRequester",{"requester": data})
}
module.exports={
    insertRequester,
    requesterForm,
    manageRequester,
    viewRequester
}