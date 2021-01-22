const express = require('express');
const router = express.Router();
const {TestimonialsInsert} = require('../controllers/testimonialsInsert');
const {TestimonialsFetch} = require('../controllers/testimonialsFetch');

router.post("/newTestimonial", TestimonialsInsert)
router.get("/testimonialFetch", TestimonialsFetch)

module.exports = router;