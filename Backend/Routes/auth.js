const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, sanitizeBody, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');


const JWT_token ="nyay@123";


router.post('/userdetails', [
    body('name').isLength({ min: 3 }),
], async (req, res) => {
    const success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    } 
    try {
        let user = await User.findOne({ 'veriNum': req.body.veriNum })
        if (!user) {
            // return res.status(400).json({userdet:user.id,success, Error: 'User with this veri number already exist' })
            // Creating User
            user = await User.create({
                name: req.body.name,
                veriNum: req.body.veriNum,
                lawyer:req.body.lawyer,
                prisoner:req.body.prisoner
            })
            const data={
                id:user.id
            } 
            const token=jwt.sign(data,JWT_token);
            res.json({status:"userCreated",success:true,token})
        }
        const data={
            id:user.id
        } 
        const token=jwt.sign(data,JWT_token);
        res.json({status:"userLogin",success:true,token});

    } catch (error) {
        console.error(error);
    }

})

module.exports = router;