import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Sakthi Dental Clinic</h3>
          <p>
            Compassionate dental care for women, children,
            and families.
          </p>
          <p>
            B2/8, SBM Layout, Anthivadi, Hosur,
            Tamil Nadu 635109, India
          </p>
          <p>Phone: +91 9862890897 / +91 9363298118</p>
          <p>
            Email:{" "}
            <a href="mailto:info@sakthidentalclinic.in">
              info@sakthidentalclinic.in
            </a>
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer-treatments">
          <h4>Key Treatments</h4>
          <Link to="/treatments">Teeth Cleaning & Scaling</Link>
          <Link to="/treatments">Tooth Filling</Link>
          <Link to="/treatments">Root Canal Therapy</Link>
          <Link to="/treatments">Dental Implants</Link>
          <Link to="/treatments">Teeth Whitening</Link>
          <Link to="/treatments">Orthodontic Braces</Link>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <p>Connect with Sakthi Dental Clinic.</p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sakthi Dental Clinic.
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
