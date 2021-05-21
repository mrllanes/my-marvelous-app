//Do I need to import something for this?????

import { blue } from "@material-ui/core/colors";

export const ComicCard = ({
    title,
    creators,
    description,
    image,
    series,
    comicSave,
}) => {
    const cardStyleWidth = {
        width: "540px",
    };

    const thumbnail = {
        width: "150px",
    };

    const creatorStyle = {
        color: "blue",
        textAlign: "left",
    };

    return (
        <>
            <div className="card mb-3" style={cardStyleWidth}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={`${image}.jpg`}
                            style={thumbnail}
                            alt="comic cover"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <strong className="series">Series: {series}</strong>
                            <dl>
                                {creators.map((creator) => (
                                    <dd
                                        className="creators"
                                        style={creatorStyle}
                                        key={creator.resourceURI}
                                    >
                                        - {creator.name} ({creator.role})
                                    </dd>
                                ))}
                            </dl>
                            <p className="card-text">{description}</p>
                            <p className="card-text">
                                <button onClick={comicSave}>
                                    Save to My Collection!
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
