import React from "react";

export const Heading = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center">My MARVEL-ous App</h1>
                <h2 className="text-center">And behold the power of React!</h2>
                <blockquote className="blockquote text-right">
                    <p className="mb-0">
                        Whosoever holds this App, if they be worthy, shall
                        possess the power of MARVEL.
                    </p>
                    <footer className="blockquote-footer">
                        Stan Lee(ish){" "}
                        <cite title="Trilogy Cohort 42">MARVEL Legend</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};
