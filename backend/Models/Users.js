const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    veriNum:{
        type:String,
        require:true,
        unique:true
    },
    lawyer:{
        type:Boolean,
        require:true,
        default:false
    },
    prisoner:{
        type:Boolean,
        require:true,
        default:false

    },

});
const User =mongoose.model('user',userSchema);
User.createIndexes();
module.exports=User;