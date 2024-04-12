require("dotenv").config();
const express = require("express");
const app = express();
const userrouter = require("./api/users.router");
app.use(express.json());

app.use("/api/users",userrouter);




app.listen(5000,()=>{
    console.log("server up and running");
})