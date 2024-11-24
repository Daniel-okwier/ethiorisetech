
import { Link } from 'react-router-dom';
import './NotFound.css'; // Make sure to create a CSS file for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-message">Oops! Page Not Found</h2>
            <p className="not-found-description">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="not-found-link">Go Back Home</Link>
        </div>
    );
};

export default NotFound;