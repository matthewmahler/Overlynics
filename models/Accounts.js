const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName: { 
    type: String, 
    required: true 
  },
  userID: { 
    type: String, 
    required: true 
  }
 
});

const Accounts = mongoose.model("Accounts", accountSchema);

module.exports = Accounts;
