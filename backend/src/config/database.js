const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(
    'mongodb+srv://ominiuser:ominiuser@cluster0-cj3ll.mongodb.net/todoappc?retryWrites=true',
    { userNewUrlParser: true },
    err => {
        if (err) throw err;
        console.log(`Successfully connected to database.`);
    }
)
