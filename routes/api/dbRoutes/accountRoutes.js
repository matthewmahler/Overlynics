const router = require("express").Router();
const accountController = require("../../../controllers/accountController");

// Matches with "/api/accounts"
router
  .route("/")
  .get(accountController.findAll)
  .post(accountController.create);

// Matches with "/api/accounts/:id"
router
  .route("/:id")
  .get(accountController.findById)
  .put(accountController.update)
  .delete(accountController.remove);

module.exports = router;
