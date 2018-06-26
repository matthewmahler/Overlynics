const router = require("express").Router();
const owapi = require('owapi');
 

 

// Matches with "/api/nyt"
router
  .route("/")
  .get(function (req, res) {
    console.log(req.query);
    const stats = owapi.getAllStats(req.query);
    console.log(stats)
  })

module.exports = router;


