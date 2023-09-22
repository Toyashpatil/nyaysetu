const express = require("express");
const connectToMongo=require("./db")
const cors=require("cors");
const app = express();


app.use(cors())
app.use(express.json())




const port = 5000;

connectToMongo();

app.use('/api/auth', require('./Routes/auth.js'))

app.listen(port, () => {
    console.log(`nyaysetu listening on port ${port}`)
  })