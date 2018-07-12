const owjs = require('overwatch-js');

module.exports = {
  findAll: function (req, res) {
    owjs.getAll(req.params.currentPlatform, 'na', req.params.currentAccountName, true)
    .then((data) => res.json(data) );
    
  },
}