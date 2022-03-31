var express = require("express")
var router = express.Router();
// state
var {home,insertCity,insertState,cityForm}=require("../controller/PlasmaController");

var{insertDonor, donorForm,manageDonor,viewDonor,} = require("../controller/plasmaDonorController");
var{insertRequester, requesterForm,manageRequester,viewRequester} = require("../controller/plasmaRequesterModel");

var {route} = require("express/lib/application");

// router.get("/", function(req,res){
//     res.render("home");
// })

router.get('/', home);
// state
router.get("/cityForm",cityForm);
router.post("/cityState",insertState);
router.post("/cityForm",insertCity);
// router.post("/insertState",InsertState);

//donorForm viewpage
router.get('/donorForm',donorForm)
router.post("/donorForm",insertDonor)
router.get("/manageDonor",manageDonor)
router.get("/viewDonor/:id/view",viewDonor)


// requesterForm 
router.get('/requesterForm',requesterForm)
router.post("/requesterForm",insertRequester)
router.get("/manageRequester",manageRequester)
router.get("/viewRequester/:id/view",viewRequester)

module.exports = router;