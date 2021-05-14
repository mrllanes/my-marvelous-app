const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");
const comicSchema = require("./Comic");

const UserSchema = new Schema({
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

    // savedComics: [comicSchema],
});

const User = model("User", UserSchema);

module.exports = User;
