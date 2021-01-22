const express = require('express');
const router = express.Router();
const { StoreInsert } = require('../controllers/StoreCreate');
router.post("/newStore", StoreInsert)


module.exports = router;