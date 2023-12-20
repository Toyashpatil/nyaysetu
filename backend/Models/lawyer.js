const mongoose = require('mongoose');
const { Schema } = mongoose;

const lawyerSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    veriNum:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        unique:true
    },
    email:{
       type:String, 
    },
    DOB:{
        type:String
    },
    courts:{
        type:String,
    },
    filedCase:{
        type:Number,
    },
    pendingCase:{
        type:Number,
    },


    

});
const Lawyer =mongoose.model('lawyer',lawyerSchema);
Lawyer.createIndexes();
module.exports=Lawyer;