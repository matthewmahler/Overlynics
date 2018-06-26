const router = require("express").Router();
const seasonController = require("../../../controllers/seasonController");

// Matches with "/api/seasons"
router
  .route("/")
  .get(seasonController.findAll)
  .post(seasonController.create);

// Matches with "/api/seasons/:id"
router
  .route("/:id")
  .get(seasonController.findById)
  .put(seasonController.update)
  .delete(seasonController.remove);

module.exports = router;
