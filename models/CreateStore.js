const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        default: "none"
    },
    email: {
        type: String,
        default: "none"
    },
    phonenumber: {
        type: Number,
        default: 0
    }
    
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },  versionKey: false });
module.exports = mongoose.model('Store', storeSchema);