const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  userID: { 
    type: String, 
    required: true 
  },
  accountID: { 
    type: String, 
    required: true 
  },

  data: { 
    type: Array,
    of: Map,
    required: true 
  }

 
});

const Sessions = mongoose.model("Sessions", sessionSchema);

module.exports = Sessions;
