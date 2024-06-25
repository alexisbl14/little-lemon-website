import logo from './logo.svg';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo"/>
            <span>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </span>
            <span>
                <h3>Social Media Links</h3>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </span>
        </footer>
    )
}

export default Footer;