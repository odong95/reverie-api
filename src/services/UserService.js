const User = require('../models/user');
const MongooseService = require('../services/MongooseService');

class UserService {

    constructor() {
        this.MongooseServiceIns = new MongooseService(User);
    }

    async createUser(user) {
        try {
            return await this.MongooseServiceIns.create(user);
        } catch (err) {
            throw err;
        }
    }

    async getUser(id) {
        try {
            return await this.MongooseServiceIns.findById(id);
        } catch (err) {
            throw err;
        }
    }

    async updateUser(id, body) {
        try {
            return await this.MongooseServiceIns.update(id, body);
        } catch (err) {
            throw err;
        }
    }

    async deleteUser(id) {
        try {
            return await this.MongooseServiceIns.delete(id);
        } catch (err) {
            throw err;
        }
    }
}


module.exports = UserService;