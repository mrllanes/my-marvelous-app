import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const Navbar = () => {
    // const [showLinks, setShowLinks] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-light text-light navbar-dark text-center">
            <h2 className="text-center" id="name">
                Make Mine MARVEL
            </h2>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav navbar-center">
                    <li
                        className={cn("nav-item", {
                            active: location.pathname === "/",
                        })}
                    >
                        <Link className="nav-link" to="/">
                            Search For Wonder!{" "}
                            {location.pathname === "/" && (
                                <span className="sr-only">(current)</span>
                            )}
                        </Link>
                    </li>
                    <li
                        className={cn("nav-item", {
                            active: location.pathname === "/saved",
                        })}
                    >
                        <Link className="nav-link" to="/saved">
                            My Comics{" "}
                            {location.pathname === "/saved" && (
                                <span className="sr-only">(current)</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
