const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('../routes');
const config = require('../config');

class ExpressLoader {
    constructor() {
        //setup express config
        const app = express();
        const router = express.Router();

        //setup middleware
        app.use(cors());
        app.use(helmet());
        app.use(compression())
        app.use(bodyParser.json());

        //setup api routes
        routes(router);
        app.use('/api', router);

        //start application
        app.listen(3000, () => {
            console.log(`Express server is running on port ${config.port}`);
        })
    }
}

module.exports = ExpressLoader;