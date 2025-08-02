
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
