const Store = require('../models/CreateStore');

exports.StoreInsert = async (req, res) => {
    console.log(req.body)
    const StoreInsert = new Store({
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber
    });

    return await Store.findOne({name: req.name}).then( async (resp) => {
        console.log(resp)
        if(resp === null){
            await StoreInsert.save().then(async(response) => {
                return res.status(200).json({
                    success: true,
                    data: response
                })
            })
           
        } else {
            return res.status(400).json({
                success: false,
                status: "Store Already exists"
            })
        }
    })
};