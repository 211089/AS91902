const express = require('express');
const router = express.Router();
const studentController = require('../studentController');

router.get('/', studentController.homepage)
router.get('/add', studentController.addStudent)
router.post('/add', studentController.postStudent)

module.exports = router;