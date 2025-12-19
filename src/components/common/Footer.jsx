function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Candiclie Business Hotel</h5>
            <p>
              Luxury stay in the heart of Uttar Pradesh. Experience comfort, elegance, 
              and world-class services.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/rooms" className="text-white text-decoration-none">Rooms</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <p>
              <strong>Address:</strong> Business District, Uttar Pradesh, India<br />
              <strong>Phone:</strong> +91 07526069691<br />
              <strong>Email:</strong> info@candiecliebusinesshotel.com
            </p>

            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-top border-secondary" />

        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Candiclie Business Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
