const Course = require('../models/course');
class SiteController {

    home(req, res) {
        // res.render("home")
        getData(req, res);
        async function getData(req, res) {
            try {
                const doc = await Course.find({});
                res.json(doc);
            } catch (error) {
                res.status(400).json({ error: "Error" })
            }
        }
    }

    // [GET]: news/search
    search(req, res) {
        res.render('search')
    }

}
module.exports = new SiteController;