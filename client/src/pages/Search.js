import { useState } from "react";
import API from "../utils/API";
import { ComicCard } from "../components/ComicCard";

export const Search = () => {
    const [comics, setComics] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const searchComics = () => {
        API.getComics(searchWord)
            .then((results) => {
                console.log(results.data.data.results);
                setComics(results.data.data.results);
            })
            .catch((error) => {
                console.log(error);
                setComics([]);
            });
    };

    const handleInput = (e) => {
        setSearchWord(e.target.value);
    };

    const saveComic = (data) => {
        API.saveComic({
            title: data.title,
            series: data.series.name,
            author: data.author,
            description: data.description,
            image: data.thumbnail.path,
        });
    };

    return (
        <>
            <div className="container text-center col-3">
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
                        {comics.map((data) => (
                            <div key={data.id} classname="col">
                                <ComicCard
                                    title={data.title}
                                    series={data.series.name}
                                    author={data.author}
                                    description={data.description}
                                    image={data.thumbnail.path}
                                    comicSave={() => saveComic(data)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
