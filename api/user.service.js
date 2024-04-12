const pool = require("../config/database")

module.exports={
    create: (data,callback)=>{
        pool.query(
            'insert into registration (firstname,lastname,gender,email,password,number) values(?,?,?,?,?,?)',[
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error,results,fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null,results);
            
            }
        );
    },
    getusers: callback=>{
        pool.query(
            `select id,firstname,lastname,gender,email,number from registration`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    },

    getuserbyuserid: (id,callback)=>{
        pool.query(
            `select id,firstname,lastname,gender,email,number from registration where id =?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }
        );
    },
    updateuser: (data,callback)=>{
        pool.query(
            'update registration set firstname=? ,lastname=?,gender=?,email=?,password=?,number=? where id =?',[
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error,results,fields)=>{
                if(error){
                   callback(error);
                }
                return callback(null,results[0]);
            
            }
        );
    },
            
     deleteuser: (data,callback)=>{
        pool.query(
            `delete from regitration where id=?`,
            [data.id],
            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }
        );
    },

    getuserbyuseremail:(email,callback)=>{
        pool.query(
            `select * from registration where email =?`,
            [email],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }
                return callback(null,results[0]);
            }
        );
    }
};