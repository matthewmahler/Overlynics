const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  }
 
});
// User.plugin(passportLocalMongoose);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
