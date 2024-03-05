import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initRoutes from './route/index'
import connectDB from './config/connectDB';
require('dotenv').config();

const app=express();
// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app)
initRoutes(app)
connectDB();
const port=process.env.PORT || 6969;
app.listen(port,()=>{
    console.log('listening on port'+port);
})