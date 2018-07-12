const router = require("express").Router();
const owapi = require("../../../controllers/owapiController");


 

router
  .route("/:currentAccountName/:currentPlatform")
  .get(owapi.findAll)
   
  

module.exports = router;


