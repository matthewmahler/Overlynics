const router = require("express").Router();
const userController = require("../../../controllers/userController");

// Matches with "/api/users"
router
  .route("/")
  .get(userController.findOne)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:email")
  .get(userController.findOne)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;
