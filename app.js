const express = require('express');                  //importing module express
const app = express();                                         //creating a express app 
const mongoose = require('mongoose');               //tada we have imported mongoose
require('dotenv/config');
const bodyParser = require('body-parser');        //used to parse the requested data body
const cors = require('cors');
//------------middlewares------
app.use(bodyParser.json());   //this will parse the body recieved from req object in json format.
app.use(cors());

//connecting our db
try {
  mongoose.connect(process.env.DB_Connection).then( ()=> console.log('Database Connected Successfully.') )
} catch (error) {
  console.log(error);
}


//-----------------------middlewares-------------------------
const postRoute = require('./routes/posts');  //importing route posts
app.use('/posts', postRoute);





//Routes
app.get('/', (req, res) => {
    res.send('We are at home');
})


//how to start server listening
app.listen(3000);