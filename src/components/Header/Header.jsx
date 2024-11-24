import { useState, useEffect } from 'react'; // Import useEffect

import { Link } from "react-router-dom";
import logo from "../../assets/Images/er.jpg"; // Adjust path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isTopVisible, setIsTopVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
            setIsTopVisible(false);
        } else {
            setIsSticky(false);
            setIsTopVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`main-header ${isSticky ? "sticky-header" : ""}`}>
                <div className={`header-top ${isTopVisible ? "" : "hidden"}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="left-column">
                                <div className="text">
                                    Elevate Your Presence with EthioRise!
                                </div>
                                <div className="office-hour">
                                    24/7 Service
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo-box">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="hamburger" onClick={toggleMenu}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={`nav-outer ${isMenuOpen ? "open" : ""}`}>
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse">
                                            <ul className="navigation">
                                                <li className="dropdown">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="/about">About Us</Link>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="/services">Services</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;