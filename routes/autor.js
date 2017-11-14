var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Asignatura = require('../models/Asignatura.js');

/* GET ALL Asignatura */
router.get('/', function(req, res, next) {
  Asignatura.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Asignatura BY ID */
router.get('/:id', function(req, res, next) {
  Asignatura.findById(req.params.id).populate('book').exec(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Asignatura */
router.post('/', function(req, res, next) {
  Asignatura.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Asignatura */
router.put('/:id', function(req, res, next) {
  Asignatura.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Asignatura */
router.delete('/:id', function(req, res, next) {
  Asignatura.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE Asignatura BY Name */    /* ASIGNATURA*/
router.get('/filtro_nombre/:nombre', function(req, res, next) {
  Asignatura.find({"nombre" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});
/* GET SINGLE Asignatura BY Titulacion*/    /* ASIGNATURA*/
router.get('/filtro_titulacion/:titulacion', function(req, res, next) {
  Asignatura.find({"titulacion" : req.params.nombre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});
/* GET SINGLE Asignatura BY Cuatrimestre*/    /* ASIGNATURA*/
router.get('/filtro_cuatrimestre/:cuatrimestre', function(req, res, next) {
  Asignatura.find({"cuatrimestre" : req.params.cuatrimestre }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

module.exports = router;
