
const mongoose = require('mongoose');
const config = require('./config');

//setup mongoDB
mongoose.connect(config.mongoDbUrl, config.mongoOpts)
    .then(_ => {
        console.log('MongoDB connection established successfully');

        //create Express instance on success
        const ExpressLoader = require('./loaders/ExpressLoader');
        new ExpressLoader();
    })
    .catch(err => console.log(err))

