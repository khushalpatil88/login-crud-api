const { createuser ,
    getuserbyuserid,
    getusers,
    updateuser,
    deleteuser,
    login
}= require("./user.controllers");

const router = require("express").Router();
const {  checktoken }= require("../auth/token_validation");

router.post("/",checktoken,createuser);
router.get("/",checktoken,getusers);
router.get("/:id",checktoken,getuserbyuserid);
router.patch("/",checktoken,updateuser);
router.delete("/",checktoken,deleteuser);
router.post("/login",login);

module.exports=router;