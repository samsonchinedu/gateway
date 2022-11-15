import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";

const Layout = ({ children }) => {
return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
);
};

export default Layout;
