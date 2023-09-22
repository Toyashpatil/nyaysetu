const Mongoose = require("mongoose");

const mongoURI=`mongodb+srv://toyash:oOcgrae4WcClmtUz@nyaysetu.fwn5kjc.mongodb.net/nyaysetu`;

const connectToMongo = async () =>{
    try {
        await Mongoose.connect(mongoURI);
        console.log("nyaysetu database connected");
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectToMongo;