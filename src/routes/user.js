const express = require("express");
const userSchema = require("../models/Users");

const router = express.Router();

//get users
router.get("/users", (req, res) => {
    userSchema
    .find()
    .then((data) => res.send(data))
    .catch((error) => res.json({message: error}));
});

router.get("/users/:id", (req, res) =>{
    const { id } = req.params; 
    userSchema
    .findById(id)
    .then((data) => res.send(data))
    .catch((error) => res.json({message: error}));
})

//create user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.send(data))
    .catch((error) => res.json({message: error}));
});

//Modify User
router.put("/users/:id", (req,res) => { 
    const { id } = req.params;
    userSchema
    .findByIdAndUpdate(id, req.body)
    .then((data) => res.send(data))
    .catch((error) => res.json({message: error}));
})

//Delete User
router.delete("/users/:id", (req,res) => {
    userSchema
    .findByIdAndDelete(req.params.id)
    .then((data) => res.send(data))
    .catch((error) => res.json({message: error}));
})

module.exports = router;