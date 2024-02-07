const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes =  require("./routes/user.js");
const shipmentRoutes = require("./routes/shipment.js");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", shipmentRoutes);

//routes
app.get("/", (req,res) => {
    res.send("Welcome to express app");
});

//conection
mongoose.connect(
    process.env.MONGODB_URI
).then(() => {console.log("Connected to MOngoB atlas")}
).catch((error) => {console.error(error)})

app.listen(port, () => console.log("Server Listening to port ", 9000));