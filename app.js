const express = require('express');
const session = require('express-session');
const flash=require('connect-flash');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const authRoutes=require('./routes/authRoutes');
const staffRoutes=require('./routes/staffRoutes');
const studentRoutes=require('./routes/studentRoutes')




const app = express();

//middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
    secret: process.env.SESSION_SECRET,resave:false,saveUninitialized:true
}));

app.use(flash());

//set ejs
app.set('view engine','ejs');


// routes

app.use('/',require('./routes/authRoutes'));
app.use('/staff',require('./routes/staffRoutes'));
app.use('/student',require('./routes/studentRoutes'));

// start
const port=3000
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
    console.log("database:",process.env.DB_HOST)
    });;