const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");
const comicSchema = require("./Comic");

const UserSchema = new Schema({
    username: {
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
