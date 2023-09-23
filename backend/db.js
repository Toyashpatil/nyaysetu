const Mongoose = require("mongoose");

const MongoURI="mongodb+srv://toyash:xoexASywq8ZOcQLG@nyaysetu.fwn5kjc.mongodb.net/nyaysetu"

const connectToMongo= async ()=>{
    await Mongoose.connect(MongoURI);
    console.log("nyaysetu database connected")
}

module.exports = connectToMongo;