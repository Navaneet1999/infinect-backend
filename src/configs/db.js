require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(
        process.env.dbLink,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log("connected")
    )
}