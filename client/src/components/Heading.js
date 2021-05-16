import React from "react";

export const Heading = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center">My MARVEL-ous App</h1>
                <h2 className="text-center">Welcome True Believers!</h2>
                <blockquote className="blockquote">
                    <p className="mb-0">
                        Whosoever holds this App, if they be worthy,
                    </p>
                    <p className="mb-0">shall possess the power of MARVEL.</p>
                </blockquote>
                <blockquote className="blockquote">
                    <footer className="blockquote-footer">
                        Stan Lee(ish){" "}
                        <cite title="StanTheMan"> - MARVEL Legend</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};
