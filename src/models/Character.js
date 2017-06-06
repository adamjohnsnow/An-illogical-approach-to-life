var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testDB = "mongodb://localhost/RPGDB"

mongoose.connect(testDB)

var characterSchema = new Schema({
  name: { type: String, unique : true, required : true },
  xp: { type: Number, default: 0 },
  attack: { type: Number, default: 0 },
  defence: { type: Number, default: 0 },
  level: { type: Number, default: 1 }
});

var Character = mongoose.model('Character', characterSchema);
module.exports = Character;
