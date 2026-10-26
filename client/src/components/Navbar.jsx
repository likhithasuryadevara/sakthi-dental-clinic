
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">✦</span>
        Sakthi Dental Clinic
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact" className="nav-button">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
