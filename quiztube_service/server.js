const express = require('express');
var cors = require('cors');
const bodyparser= require('body-parser');
const mongoose = require('mongoose');
const logger = require('./utils/log');
const mongoConfig = require('./config/mongo.config');
const qzMasterRouter = require('./app/routes/quiz/quizMaster')
const qzDetailsRouter = require('./app/routes/quiz/quizDetails')
//logging test
logger.log('info', 'my first message');
logger.log('info', 'my first message2');
logger.log('info', 'my first message3');
logger.info('my javascript first info');

let app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use('/quiz/master', qzMasterRouter);
app.use('/quiz/details', qzDetailsRouter);

app.listen(3000, (err)=>{
    console.log('server is listening at port 3000...');
});

mongoose.Promise = global.Promise;
let url = mongoConfig.url;
mongoose.connect(url , (err)=>{
    console.log('mongoDB server is running with '+ url);
});
