import express from 'express';
let router=express.Router();
import homeController from '../controllers/homeController';
let initRoutes=(app)=>{
    router.get('/', homeController.getHomePage);
    return app.use('/',router)
}
module.exports = initRoutes