require('dotenv').config();

const config = {
    port: process.env.SERVER_PORT || 3000,
    env: process.env.NODE_ENV || "development",
    mongoDbUrl: process.env.MONGO_DB_URI || "mongodb://localhost/test-db",
    mongoOpts: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
}

module.exports = config;