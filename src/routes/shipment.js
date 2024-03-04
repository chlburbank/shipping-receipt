const express = require("express");
const shippingSchema = require("../models/Shipping.js");

const router = express.Router();

//Get all Shipments
router.get("/shipments", (req, res) => {
    shippingSchema
    .find()
    .then((data) => res.send(data))
    .catch((error) => res.json({ message: error }));
})

//Get a Single shipment
router.get("/shipments/:id", (req, res) => {
    shippingSchema
    .findById(req.params.id)
    .then((data) => res.send(data))
    .catch((error) => res.json({ message: error }));
})

//Create a Shipment
router.post("/shipments", (req,res) => {
    const shipment = shippingSchema(req.body);
    shipment
    .save()
    .then((data) => res.send(data))
    .catch((error) => res.json({ message: error }));
})

//Modify Shipment
router.put("/shipments/:id", (req,res) => {
    shippingSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.send(data))
    .catch((error) => res.json({ message: error }));
})

//Delete a Shipment
router.delete("/shipments/:id", (req, res) => {
    shippingSchema
    .findByIdAndDelete(req.params.id)
    .then((data) => res.send(data))
    .catch((error) => res.json({message: error}));
})

//Delete all (Do no add this into the heroku deploy, this is only for testing)
router.delete("/shipments", (req, res) => {
    shippingSchema
    .deleteMany({})
    .then(() => res.status(200).send("Collection cleared successfully."))
    .catch(error => res.status(500).json({ message: error }));
})

module.exports = router