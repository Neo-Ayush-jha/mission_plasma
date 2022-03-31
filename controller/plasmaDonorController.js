var plasmaDonorModel = require("../model/plasmaDonorModel");
var cityModel = require("../model/cityModel");
var stateModel = require("../model/stateModel");




function donorForm(req,res) {
    // res.render('plasmaDonar');
    var data =  stateModel.find({},(error,response)=>{
        res.render("plasmaDonar",{"state":response});
    });
}
function viewDonor(req,res){
    var id = req.params.id;
    plasmaDonorModel.findOne({_id:id},(error,response)=>{
        res.render("viewDonor",{'donor':response})
    })
    // var data =  stateModel.find({},(error,response)=>{
    //     res.render("viewDonor",{"state":response});
    // });
}


function insertDonor(req,res){
    var donor = new plasmaDonorModel({
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
    donor.save();
    res.redirect("/")
    console.log(donor)
}
async function manageDonor(req, res){
    var data = await plasmaDonorModel.find({}).populate("state_id");
    res.render("manageDonor",{"donor": data})
}


module.exports={
    insertDonor,
    donorForm,
    manageDonor,
    viewDonor,
}