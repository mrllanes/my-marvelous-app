const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const ComicSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    image: {
        type: String,
    },

    authors: {
        type: Array,
    },

    series: {
        type: String,
    },
});

const Comic = model("Comic", ComicSchema);

module.exports = Comic;
