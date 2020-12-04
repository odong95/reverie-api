const userController = require('./../controllers/user.ctrl');

module.exports = (router) => {

    router.route('/users')
        .post(userController.addUser)

    router.route('/users/:id')
        .get(userController.getUserById)
        .patch(userController.updateUserById)
        .delete(userController.deleteUserById)
}