import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavbarSticky from "../Shared/Navbar/NavbarSticky";


const Root = () => {
    return (
        <div>
            <NavbarSticky></NavbarSticky>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;