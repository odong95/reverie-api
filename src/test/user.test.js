const assert = require("chai").assert;
const mocha = require("mocha");
const UserService = require("../services/UserService");

mocha.describe("User Service", () => {
  const UserServiceInstance = new UserService();

  mocha.describe("Create instance of service", () => {
    it("Is not null", () => {
      assert.isNotNull(UserServiceInstance);
    });

    /*
    it( "Exposes the createPost method", () => {
      assert.isFunction( UserServiceInstance.create );
    } );
    */
  });
});