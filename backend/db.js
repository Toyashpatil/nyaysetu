const Mongoose = require("mongoose");

const MongoURI="mongodb+srv://toyash:oOcgrae4WcClmtUz@nyaysetu.fwn5kjc.mongodb.net/nyaysetu"

const connectToMongo= async ()=>{
    await Mongoose.connect(MongoURI);
    console.log("nyaysetu database connected")
}

module.exports = connectToMongo;