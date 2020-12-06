const User = require("../models/user");
const UserService = require('../services/UserService');

const UserServiceIns = new UserService();
const NOT_FOUND = "User not found";

module.exports = (router) => {

    //create a new user
    router.route('/users')
        .post(async (req, res) => {
            try {
                const newUser = await UserServiceIns.createUser(req.body);
                res.status(201).json(newUser);
            } catch (err) {
                res.status(500).json({ message: err });
            }
        })

    //get, update, delete user by id
    router.route('/users/:id')
        .get(async (req, res) => {
            try {
                const user = await UserServiceIns.getUser(req.params.id);
                if (user) {
                    res.send(user);
                } else {
                    return res.status(404).json({ message: NOT_FOUND });
                }
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        })
        .patch(async (req, res) => {
            try {
                const user = await UserServiceIns.updateUser(req.params.id, req.body);
                if (user) {
                    res.send(user);
                } else {
                    return res.status(404).json({ message: NOT_FOUND });
                }
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        })
        .delete(async (req, res) => {
            try {
                const user = await UserServiceIns.deleteUser(req.params.id);
                if (user) {
                    res.status(204).send();
                } else {
                    return res.status(404).json({ message: NOT_FOUND });
                }
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        })
}