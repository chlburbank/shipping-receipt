const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes =  require("./routes/user.js");
const shipmentRoutes = require("./routes/shipment.js");

const app = express();
const port = process.env.PORT || 9000;

//middleware

const corsOptions ={
    origin:'https://fathomless-peak-03656-f018de2233df.herokuapp.com/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", shipmentRoutes);

//routes
app.get("/", (req,res) => {
    res.send("KB S.L API is running.");
});

//conection
mongoose.connect(
    process.env.MONGODB_URI
).then(() => {console.log("Connected to MOngoB atlas")}
).catch((error) => {console.error(error)})

app.listen(port, () => console.log("Server Listening to port ", 9000));