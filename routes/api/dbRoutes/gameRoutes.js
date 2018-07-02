const router = require("express").Router();
const gameController = require("../../../controllers/gameController");

// Matches with "/api/games"
router
  .route("/")
  .get(gameController.findAll)

// Matches with "/api/games/:id"
router
  .route("/:currentAccount/:currentSeason")
  .get(gameController.findById)
  .put(gameController.update)
  .delete(gameController.remove);

  router
  .route("/:userID/:accountID/:sessionID/:seasonID/:sessionGameNumber/:seasonGameNumber/:accountGameNumber/:rank/:map/:isPlacement")
  .post(gameController.create);

module.exports = router;
