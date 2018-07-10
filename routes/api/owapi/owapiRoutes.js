const router = require("express").Router();
const owjs = require('overwatch-js');
 

 

router
  .route("/:currentPlatform/:currentAccountName")
  .get(function (req, res) {
    console.log(req.query);
    owjs
    .getAll(req.params.currentplatform, 'na', req.params.currentAccountName)
    .then((data) => console.dir(data, {depth : 2, colors : true}) );
 
    console.log(stats)
  })

module.exports = router;


