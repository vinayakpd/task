const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
    name: {
        type: String,
        default: "none"
    },
    email: {
        type: String,
        default: "none"
    },
    img: { 
        data:{
            type: Buffer,
            default: Buffer.alloc(0)
        },
        contentType: {
            type: String,
            default: "none"
        },
    }
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },  versionKey: false });
module.exports = mongoose.model('Testimonials', testimonialSchema);