const express = require("express");
const connectToMongo = require('./db');
const app =express();
const cors = require("cors");



const port=5000;

connectToMongo();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./Routes/auth.js'))

app.listen(port, () => {
    console.log(`nyaysetu app listening on port ${port}`)
  })