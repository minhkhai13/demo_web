module.exports = {
    muntilCourseMongoose: function (database) {
        return database.map(data => data.toObject());
    },
    conurseMongoose: function (data) {
        return data ? data.toObject() : data;
    }
}