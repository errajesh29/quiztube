
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    active : true,
    email : String,
    firstName : String,
    lastName : String,
    role: String,
    lastLogin : { type: Date, default: Date.now },
    created : { type: Date, default: Date.now }

});

module.exports = mongoose.model('User', userSchema);

// {
//     "_id" : ObjectId("54ad6c3ae764de42070b27b1"),
//     "active" : true,
//     "email" : "testuser1@example.com",
//     "firstName" : "Test",
//     "lastName" : "User1",
//     "sp_api_key_id" : "6YQB0A8VXM0X8RVDPPLRHBI7J",
//     "sp_api_key_secret" : "veBw/YFx56Dl0bbiVEpvbjF”,
//     "lastLogin" : ISODate("2015-01-07T17:26:18.996Z"),
//     "created" : ISODate("2015-01-07T17:26:18.995Z"),
//     "subs" : [ ObjectId("523b1153a2aa6a3233a913f8"),
//                                ObjectId("54b563c3a50a190b50f4d63b") ],
// }