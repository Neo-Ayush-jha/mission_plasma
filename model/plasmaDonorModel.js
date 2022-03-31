var mongoose =require('mongoose')

var plasmaDonorModel= mongoose.Schema({
    name:{type:String,require:true},
    gender:{type:String,require:true},
    age:{type:String,require:true},
    bloodGroup:{type:String,require:true},
    cpd:{type:String,require:true},
    cnd:{type:String,require:true},
    phone_no:{type:String,require:true},
    state_id:{type:mongoose.Schema.Types.ObjectId,ref:"states"},    
    city_id:{type:mongoose.Schema.Types.ObjectId,ref:"citys"},
});
var donor = mongoose.model("donor", plasmaDonorModel);
module.exports=donor;