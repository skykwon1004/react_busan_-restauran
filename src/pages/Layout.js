import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ gugun }) => {
    return (
        <>
            <Header gugun={gugun} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;