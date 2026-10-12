import "./Footer.css";

// Footer — address, opening hours, and the credit line.

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Contact info */}
          <div className="footer__section">
            <h4 className="footer__heading">Contact</h4>
            <p>123 Spice Lane, Flavour Town</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@thespicetable.com</p>
          </div>

          {/* Opening times */}
          <div className="footer__section">
            <h4 className="footer__heading">Opening Hours</h4>
            <p>Mon – Fri: 11:00 AM – 10:00 PM</p>
            <p>Sat – Sun: 10:00 AM – 11:00 PM</p>
          </div>

          {/* Credit */}
          <div className="footer__section">
            <h4 className="footer__heading">The Spice Table</h4>
            <p>Fresh food, made with love.</p>
            <p className="footer__credit">Submitted by: Abhishek Biradar</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© 2024 The Spice Table. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
