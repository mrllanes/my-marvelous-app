import { useState } from "react";
import API from "../utils/API";
import { ComicCard } from "../components/ComicCard";

export const Search = () => {
    const [comics, setComics] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const searchComics = () => {
        API.searchComics(searchWord)
            .then((results) => {
                console.log(results);
                setComics(results.data);
            })
            .catch(() => {
                setComics([]);
            });
    };

    const handleInput = (e) => {
        setSearchWord(e.target.value);
    };

    return (
        <>
            <div className="container text-center">
                <input
                    type="text"
                    class="form-control"
                    id="searchWord"
                    placeholder="Search for a Book!"
                    value={searchWord}
                    onChange={handleInput}
                    aria-label="Search"
                    aria-describedby="button-addon2"
                />
                <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={searchComics}
                >
                    Search
                </button>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        {comics.map((data, id) => (
                            <div key={data.id} classname="col">
                                <ComicCard
                                // title={data.title}
                                // author={data.author}
                                // description={data.description}
                                // image={data.image}
                                // link={data.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
