const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const ConnectDB = require('./config/database');

//require env
require('dotenv').config();

//INIT Server
const app = express();

//INIT cors policy
app.use(cors({credentials: true, origin:`${process.env.ALLOWED_ORIGINS}`}))

//INIT middleware
app.use(bodyParser.json({
    limit: '50mb'
}))

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb',

}))

//INIT database
ConnectDB();

//Multer INIT for File Handling on images
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, //Restrict to 10MB only
    }
});

// route
app.use("/testimonials",multerMid.single("file") ,require('./routes/testimonial'))
app.use("/stores", require('./routes/Store'))
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})




//export Server
module.exports = app;