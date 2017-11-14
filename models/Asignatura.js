var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var asignaturaSchema = new Schema({ 
  nombre: String,
  curso: String,
  cuatrimestre: String
});

module.exports = mongoose.model('Asignatura', asignaturaSchema);
 