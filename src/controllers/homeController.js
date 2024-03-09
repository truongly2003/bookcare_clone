import db from '../models/index';
const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });
    } catch (err) {
        console.log(err);
    }
};
let getCRUD=(req,res)=>{
    return res.render('crud.ejs')
}
let postCRUD=(req,res)=>{
    res.send(req.body);
}
module.exports = {
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getHomePage: getHomePage,
};
