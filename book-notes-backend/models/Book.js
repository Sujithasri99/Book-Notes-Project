const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const bookSchema = new Schema ({
    title : String,
    author : String,
    coverImgUrl : String,
    rating : Number,
    notes : String
});

module.exports = mongoose.model("Book", bookSchema);