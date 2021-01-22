const Testimonials = require('../models/testimonial');

exports.TestimonialsFetch = async (req, res) => {       

    return await Testimonials.find().then( async (resp) => {
        
        if(!(resp === null)){
            
                return res.status(200).json({
                    success: true,
                    data: resp
                })
           
           
        } else {
            return res.status(400).json({
                success: false,
                status: "Testimonial Already exists"
            })
        }
    })
};