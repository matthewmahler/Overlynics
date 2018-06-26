const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  userID: { 
    type: String, 
    required: true 
  },
  accountID: { 
    type: String, 
    required: true 
  },
  sessionID: { 
    type: String, 
    required: true 
  },
  seasonID: { 
    type: String, 
    required: true 
  },
  sessionGameNumber: { 
    type: Number, 
    required: true 
  },
  seasonGameNumber: { 
    type: Number, 
    required: true 
  },
  accountGameNumber: { 
    type: Number, 
    required: true 
  },
  rank: { 
    type: Number, 
    required: true 
  },
  map: { 
    type: String, 
    required: true 
  },
  isPlacement: { 
    type: Boolean, 
    required: true 
  },
 
});

const Games = mongoose.model("Games", gameSchema);

module.exports = Games;
