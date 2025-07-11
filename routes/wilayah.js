const express = require('express');
const WilayahController = require('../controllers/WilayahController');

const router = express.Router();

// Get all provinces
router.get('/provinces', WilayahController.getProvinces);

// Get specific province by ID
router.get('/provinces/:id', WilayahController.getProvinceById);

// Get regencies by province ID
router.get('/provinces/:province_id/regencies', WilayahController.getRegencies);

// Get districts by regency ID
router.get('/regencies/:regency_id/districts', WilayahController.getDistricts);

// Get villages by district ID
router.get('/districts/:district_id/villages', WilayahController.getVillages);

module.exports = router;