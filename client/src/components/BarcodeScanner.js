import React, { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { ComicCard } from "./ComicCard";
import API from "../utils/API";

export const BarcodeScanner = () => {
    const [comics, setComics] = useState([]);
    const [data, setData] = React.useState("Not Found");
    const searchComics = (text) => {
        API.getComics(text)
            .then((results) => {
                console.log(results.data.data.results);
                setComics(results.data.data.results);
            })
            .catch((error) => {
                console.log(error);
                setComics([]);
            });
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
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) {
                        setData(result.text);
                        searchComics(result.text);
                    } else setData("Not Found");
                }}
            />
            <p>{data}</p>{" "}
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
