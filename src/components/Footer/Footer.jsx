import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="theBackground text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              <strong>
              We are dedicated to providing innovative digital solutions that address a wide range of challenges. Committed to excellence, we strive to create lasting impacts in our community and beyond.
              </strong>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              referral circle, Hawassa ,Ethiopia
              <br />
              Phone: (+251) 9 -529-969-82, <br/>
                (+251) 9 -939-206-85 .<br/>
                Email:  ethiorise@gmail.com
              <br />
              
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2024 ethiorise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;