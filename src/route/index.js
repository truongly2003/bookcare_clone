import express from 'express';
let router=express.Router();
import homeController from '../controllers/homeController';
let initRoutes=(app)=>{
    router.get('/', homeController.getHomePage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    return app.use('/',router)
}
module.exports = initRoutes