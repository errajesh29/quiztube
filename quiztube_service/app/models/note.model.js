const mongoose = require('mongoose');

let schema = mongoose.Schema({
    title:String,
    content: String
    },
    {
        timestamp : true
    }
);

module.exports = mongoose.model('Note' , schema);