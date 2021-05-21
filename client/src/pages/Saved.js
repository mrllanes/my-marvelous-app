import { useEffect, useState } from "react";
import API from "../utils/API";
import { ComicCard } from "../components/ComicCard";

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
            <h1>Your MARVELous Collection</h1>
            <div className="row">
                <div className="col">
                    {comics.map((data, i) => (
                        <div key={data.id} className="col">
                            <ComicCard
                                title={data.title}
                                series={data.series.name}
                                creators={data.creators.items}
                                description={data.description}
                                image={data.thumbnail.path}
                                // comicSave={() => saveComic(data)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
