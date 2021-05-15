import axios from "axios";

export default {
    // Gets all comics
    getComics: function () {
        return axios.get("/api/comics");
    },
    // Gets the comic with the given id
    getComic: function (id) {
        return axios.get("/api/comics/" + id);
    },
    // Deletes the comic with the given id
    deleteComic: function (id) {
        return axios.delete("/api/comics/" + id);
    },
    // Saves a comic to the database
    saveComic: function (comicData) {
        return axios.post("/api/comics", comicData);
    },
    searchComics: function (UPC) {
        return axios.get("/api/" + UPC);
    },
};
