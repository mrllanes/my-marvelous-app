const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const ComicSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
});

const Comic = model("Comic", ComicSchema);

module.exports = Comic;
