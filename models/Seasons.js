const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  seasonNumber: { 
    type: Number, 
    required: true 
  },
  startDate: { 
    type: Date, 
    required: true 
  },
  endDate: { 
    type: Date, 
    required: true 
  }
 
});

const Seasons = mongoose.model("Seasons", seasonSchema);

module.exports = Seasons;
