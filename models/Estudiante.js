var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new mongoose.Schema({
  nombre: String,
  asignatura:{ type: Schema.ObjectId, ref: "Asignatura" }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);