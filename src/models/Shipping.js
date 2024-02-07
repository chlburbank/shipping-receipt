const mongoose = require("mongoose");

const shipmentSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const shippingSchema = mongoose.Schema({
    sender: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        tel: {
            type: Number,
            required: true
        },
        nie: {
            type: String,
            required: true
        }
    },
    consignee: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        tel: {
            type: Number,
            required: true
        },
        nie: {
            type: String,
            required: true
        }
    },
    goods: [
        shipmentSchema
    ]
})

module.exports = mongoose.model("Shipment", shippingSchema)