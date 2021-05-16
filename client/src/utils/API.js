import axios from "axios";
const APIKey = "e30306445f5a20c4ef306d95f0cb7c0c3cf8c3e5";

export default {
    // Gets all comics
    getComics: function (searchWord) {
        return axios.get(
            `https://gateway.marvel.com/v1/public/comics?title=${searchWord}&apikey=${APIKey}`
        );
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
