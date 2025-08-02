
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
