import { useState } from "react";
import API from "../utils/API";
import { ComicCard } from "../components/ComicCard";
import { Link } from "react-router-dom";

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
            creators: data.creators.items,
            description: data.description,
            image: data.thumbnail.path,
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="container text-center col-3">
                <div className="row">
                    <input
                        type="text"
                        class="form-control"
                        id="searchWord"
                        placeholder="Enter 17 Digit UPC Code!"
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
                        <strong>Search</strong>
                    </button>
                    <Link to="/barcode_scanner">
                        <button
                            class="btn btn-outline-danger"
                            type="button"
                            id="button-addon2"
                        >
                            ** Experimental Barcode Scanner! **
                        </button>
                    </Link>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        {comics.map((data) => (
                            <div key={data.id} className="col">
                                <ComicCard
                                    title={data.title}
                                    series={data.series.name}
                                    creators={data.creators.items}
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
