const router = require("express").Router();

const owapiRoutes = require("./owapi/owapiRoutes");
const userRoutes = require("./dbRoutes/userRoutes");
const accountRoutes = require("./dbRoutes/accountRoutes");
const sessionRoutes = require("./dbRoutes/sessionRoutes");
const gameRoutes = require("./dbRoutes/gameRoutes");
const seasonRoutes = require("./dbRoutes/seasonRoutes");

router.use("/users", userRoutes);
router.use("/accounts", accountRoutes);
router.use("/sessions", sessionRoutes);
router.use("/games", gameRoutes);
router.use("/seasons", seasonRoutes);

router.use("/owapi", owapiRoutes);



module.exports = router;