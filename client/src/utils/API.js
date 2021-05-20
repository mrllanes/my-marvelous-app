import axios from "axios";
const APIKey = "df6b588924aeb6d7464567744be992e3";

export default {
    // Gets all comics
    getComics: function (searchWord) {
        return axios.get(
            `https://gateway.marvel.com:443/v1/public/comics?upc=${searchWord}&ts=1&apikey=${APIKey}&hash=fc34bd0ffc64217164c430ae5be664b2`
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
