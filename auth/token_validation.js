//this file are the token file then user are use to genarate the the token and token are use update the database entries then token 
// token are invalid there is no changes in the database 

const { verify }= require("jsonwebtoken");


module.exports={
    checktoken: (req,res,next)=>{
        let token = req.get("authorization");
        if(token){
             token = token.slice(7);
             verify(token,"khushalvk18",(err,decoded)=>{
                if(err){
                    res.json({
                        success:0,
                        message:"invalid token"
                    });
                }else{
                    next();
                }
             });
        }else{
            res.json({
                success: 0,
                message: " access denied! unauthrized user"
            });
        }
    }
}