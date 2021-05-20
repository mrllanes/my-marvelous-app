import { useEffect, useState } from "react";
import API from "../utils/API";

export const Saved = () => {
    const [comics, setComics] = useState([]);

    // Load all comics and store them with setComics
    useEffect(() => {
        loadComics();
    }, []);

    // Loads all comics and sets them to comics
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
