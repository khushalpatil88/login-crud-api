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