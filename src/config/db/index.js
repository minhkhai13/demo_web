const mongoose = require('mongoose');
const { connect } = require('../../routes/news');
const path = 'mongodb+srv://minhkhai130198:minhkhai1998@cluster0.752dppu.mongodb.net/web';
async function connnect() {
    try {
        await mongoose.connect(path);
        console.log('connect successfully');
    } catch (error) {
        console.log(error);
    }
}
module.exports = { connnect };
