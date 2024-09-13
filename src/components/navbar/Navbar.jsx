import "./navbar.css" 

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <a href="/" className="logo">EasyBooking</a>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton navButtonLogin">Login</button>
                </div>
            </div>
        </div>
    )
}