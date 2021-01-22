const Testimonials = require('../models/testimonial');

exports.TestimonialsInsert = async (req, res) => {
  
    const testimonialsInsert = new Testimonials({
        name: req.body.name,
        email: req.body.email,
        img: {
            data: req.file.buffer || null,
            contentType: req.file.mimetype
        }
    });

    return await Testimonials.findOne({name: req.name}).then( async (resp) => {
        console.log(resp)
        if(resp === null){
            await testimonialsInsert.save().then(async(response) => {
                return res.status(200).json({
                    success: true,
                    data: response
                })
            })
           
        } else {
            return res.status(400).json({
                success: false,
                status: "Testimonial Already exists"
            })
        }
    })
};