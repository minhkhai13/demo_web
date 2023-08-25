const Course = require('../models/course');
const {muntilCourseMongoose} = require('../../util/mongoose')
class SiteController {
    home(req, res) {
        // res.render("home")
        // Course.find({}).then(document => res.json(document)).catch(error => next(error));
        Course.find({})
        .then(document =>{
            res.render('home',{document:muntilCourseMongoose(document)});

        })
        .catch(error => next(error));

    }

    // [GET]: news/search
    search(req, res) {
        console.log(req.body)
        res.render('search');
    }
    // [GET]:home
    // home(req,res){
    //     res.render('home')
    // }
}
module.exports = new SiteController();
