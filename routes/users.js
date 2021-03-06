const express = require('express');
const router = express.Router();
const passport = require('passport');//need to figout how to use authentication
const User = require('../models/user');

//Register
router.get('/vaild',(req,res,next)=>{
    res.send("Vaild");
});
router.post('/register',(req,res,next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    // if User already exist?
    User.addUser(newUser,(err,user)=>{
        if(err)
        {
            res.json({sucess: false, msg:err});
        }
        else
        {
            res.json({success: true, msg:"User register Sucessfully"});
        }
    });
});

module.exports = router;