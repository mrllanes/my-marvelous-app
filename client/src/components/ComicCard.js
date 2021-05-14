//Do I need to import soemthing for this?????

export const ComicCard = ({ title, author, description, image, link }) => {
    const cardStyleWidth = {
        width: "540px",
    };

    return (
        <>
            <div className="card mb-3" style={cardStyleWidth}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <h5 className="author">{author}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">
                                <button>View</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
