import { useEffect, useState } from "react";
import API from "../utils/API";

export const Saved = () => {
    const [comics, setComics] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadComics();
    }, []);

    // Loads all books and sets them to books
    function loadComics() {
        API.getComics()
            .then((res) => setComics(res.data))
            .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <h1>Your Comic Collection</h1>
        </div>
    );
};
