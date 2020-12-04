const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const mongoose = require('mongoose');
const routes = require('./routes/')
require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;

//setup express config
const app = express();
const router = express.Router()

//middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

//api routes
app.use('/api', router);
routes(router);

//setup mongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(_ => console.log('MongoDB connection established successfully'))
    .catch(err => console.log(err))

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})