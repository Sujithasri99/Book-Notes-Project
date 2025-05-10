require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes.js");
const cors = require("cors");

const app = express();
const PORT = 3000;

const DB_URL = process.env.MONGO_URL;
const connectDB = async () => {
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected");
    } catch(err) {
        console.log(err.message);
    }
}
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", bookRoutes);


app.use(cors({
  origin: 'http://localhost:3001' // frontend's origin
}));

app.post("/api/books", (req, res) => {
  res.send("It works!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});