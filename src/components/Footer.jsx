import React from "react";

function Footer() {
  return (
    <footer className="footer bg-body-tertiary mt-5 py-3">
      <div className="container text-center text-md-left">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <div className="p-2">
            <a href="mailto:info@desertsafaridubai.com" className="footer-link">
              <i className="fas fa-envelope"></i> Email Us
            </a>
          </div>
          <div className="p-2">
            <a href="tel:+971565364484" className="footer-link">
              <i className="fas fa-phone"></i> +971-56-5364-484
            </a>
          </div>
          <div className="p-2">
            <a href="tel:+97142087466" className="footer-link">
              <i className="fas fa-phone"></i> +971-4-2087-466
            </a>
          </div>
        </div>
        <div className="mt-3 text-center">
          <p className="fs-6">
            &copy; Copyright Desert Safari Dubai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
