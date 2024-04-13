const { create ,
    getuserbyuserid,
    getusers,
    updateuser,
    deleteuser,
    getuserbyuseremail
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const{ sign } = require("jsonwebtoken");

module.exports = {
    createuser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10); // Corrected function name to genSaltSync
        body.password = hashSync(body.password, salt); // Corrected function name to hashSync
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1, // Changed to 1 for success
                data: results
            });
        });
    },
    getuserbyuserid:(req,res)=>{
        const id = req.params.id;
        getuserbyuserid(id,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success: 0,
                    message:"record not found"
                });
            }
            return res.json({
                success: 1,
                message:results
            });
        });
    },
    getusers:(req,res)=>{
        getusers((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
        
            return res.json({
                success: 1,
                message:results
            });
        });
    },

    updateuser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10); // Corrected function name to genSaltSync
        body.password = hashSync(body.password, salt); // Corrected function name to hashSync
        updateuser(body, (err, results) => {
            if (err) {
                console.log(err);
                return ;
            
            }
            return res.json({
                success: 1,
                message:"updates successfully"
            });
        });
    },
    deleteuser:(req,res)=>{
        const id = req.body;
        deleteuser(data,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message:"record not found"
                });
            }
            return res.json({
                success: 1,
                message:"user deleted successfully"
            });
        });
    },

    // login:(req,res)=>{
    //     const body = req.body;
    //     getuserbyuseremail(body.email,(err,results)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         if(!results){
    //             return res.json({
    //                 success: 0 ,
    //                 data :"invalid email or password"
    //             });          
    //         }
    //         const result = compareSync(body.password,results.password);
    //         if(result){
    //             results.password = undefined;
    //             const jsonwebtoken =sign({result: results},"khushal12" ,{
    //                 expiresIn:"1h"
    //             });
    //           return res.json({
    //                 success:1,
    //                 message:"login succssfully",
    //                 token: jsonwebtoken
    //             });
    //         }
    //         else{
    //             return res.json({
    //                 success:0,
    //                 data:"invalid email or password"
    //             });
    //         }
    //     });
    // }

};
