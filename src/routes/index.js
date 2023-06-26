const newrouter = require('./news');
const siteRouter = require('./site')

function route(app){
    app.use('/news',newrouter);
    app.use('/',siteRouter);
}

module.exports = route;