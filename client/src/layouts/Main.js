import { Outlet } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
import { Heading } from "../components/Heading";

export const Main = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Heading />
            <Outlet />
        </div>
    );
};
