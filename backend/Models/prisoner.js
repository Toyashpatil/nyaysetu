const mongoose = require('mongoose');
const { Schema } = mongoose;

const prisonerSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    veriNum:{
        type:String,
        require:true,
        unique:true
    },
    court:{
        type:String,
    },
    upcomingHearing:{
        type:String
    },
    Act:{
        type:Number
    },
    caseStatus:{
        type:String,
    }

    

});
const Prisoner =mongoose.model('prisoner',prisonerSchema);
Prisoner.createIndexes();
module.exports=Prisoner;