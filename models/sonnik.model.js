const {Schema, model} = require("mongoose");

const SonnikSchema = new Schema({
  letter: {type: String, required: true},
  letterAlias: {type: String, required: true},
  name: {type: String, required: true},
  nameAlias: {type: String, required: true},
  sonnikName: {type: String, required: true},
  sonnikNameAlias: {type: String, required: true},
  desc: {type: [String], required: true},
})

module.exports = model("Sonnik", SonnikSchema)