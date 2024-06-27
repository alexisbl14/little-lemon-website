import lemonLogo from './lemon-logo.svg';
import './App.css';

function Footer() {
    return (
        <footer className="footer">
            <img src={lemonLogo} alt="Lemon Logo"/>
            <span>
                <h4 className="yellow-text">Contact</h4>
                <h3 className="white-text">Address</h3>
                <h3 className="white-text">Phone Number</h3>
                <h3 className="white-text">Email</h3>
            </span>
            <span>
                <h4 className="yellow-text">Social Media Links</h4>
                <h3 className="white-text">Twitter</h3>
                <h3 className="white-text">Instagram</h3>
                <h3 className="white-text">Facebook</h3>
            </span>
        </footer>
    )
}

export default Footer;