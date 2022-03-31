var mongoose = require('mongoose')

const DBConnect =async(url)=>{
    try{
        await mongoose.connect(url);
        console.log("connect with mongoodb");
    }
    catch(error){
        console.log("not-connect with mongoodb")
    }
}
module.exports = DBConnect;