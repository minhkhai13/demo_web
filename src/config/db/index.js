const mongoose = require('mongoose');
const { connect } = require('../../routes/news');
const path = 'mongodb://localhost:27017/express_edu';
async function connnect() {
    try {
        await mongoose.connect(path);
        console.log('connect successfully');
    } catch (error) {
        console.log(error);
    }
}
module.exports = { connnect };
