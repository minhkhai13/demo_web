const newrouter = require('./news');
const siteRouter = require('./site');
const login = require('./login')

function route(app) {
    app.get('/news', newrouter);
    app.get('/', siteRouter);
    app.get('/login',login)
}

module.exports = route;
