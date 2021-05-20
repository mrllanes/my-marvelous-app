//Do I need to import something for this?????

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
                            <h4 className="card-title">{title}</h4>
                            <h5 className="series">Series: {series}</h5>
                            <h5 className="creators">{creators}</h5>
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
