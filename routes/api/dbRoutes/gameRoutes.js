const router = require("express").Router();
const gameController = require("../../../controllers/gameController");

// Matches with "/api/games"
router
  .route("/")
  .get(gameController.findAll)

router
  .route("/:currentAccount/:currentSeason")
  .get(gameController.findById)
  .put(gameController.update)
  .delete(gameController.remove);

  router
  .route("/:currentUser")
  .get(gameController.findAll)
  .put(gameController.update)
  .delete(gameController.remove);

  router
  .route("/all/account/:currentAccount")
  .get(gameController.findAccountAll)

  router
  .route("/all/:currentSeason/:currentUser")
  .get(gameController.findSeasonAll)

router
  .route("/:userID/:accountID/:sessionID/:seasonID/:sessionGameNumber/:seasonGameNumber/:accountGameNumber/:rank/:map/:isPlacement")
  .post(gameController.create);

module.exports = router;
