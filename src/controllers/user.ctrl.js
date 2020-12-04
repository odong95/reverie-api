const User = require("./../models/user.model");

const NOT_FOUND = "User not found";

module.exports = {
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                res.send(user);
            } else {
                return res.status(404).json({ message: NOT_FOUND });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    addUser: async (req, res) => {
        try {
            const newUser = await new User(req.body).save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    updateUserById: async (req, res) => {
        try {
            let opt = { useFindAndModify: false, new: true };
            const user = await User.findByIdAndUpdate(req.params.id, req.body, opt);
            if (user) {
                res.send(user);
            } else {
                return res.status(404).json({ message: NOT_FOUND });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    deleteUserById: async (req, res) => {
        try {
            let opt = { useFindAndModify: false, new: true };
            const user = await User.findByIdAndRemove(req.params.id, opt);
            if (user) {
                res.status(204).send();
            } else {
                return res.status(404).json({ message: NOT_FOUND });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
};
