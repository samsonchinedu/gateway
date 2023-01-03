import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

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
