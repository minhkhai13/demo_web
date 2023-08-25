const newrouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.get('/news', newrouter);
    app.get('/', siteRouter);
}

module.exports = route;
