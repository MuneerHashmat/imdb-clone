import "./Footer.css"

/*
****************************************************************
Note: This is a modified footer component from flowbite.com
****************************************************************
*/
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="/">
              <img src="/logo.png" className="footer-img" alt="logo" />
            </a>
          </div>
          <div className="footer-grid">
            <div>
              <h2 className="footer-title">Resources</h2>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-link">
                    Blog
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-link">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Follow us</h2>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-link">
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Legal</h2>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="copyright">© 1990-2025 by IMDb.com, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
