function Contact() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Contact Us</h1>

      <div className="row justify-content-center">
    
        <div className="col-lg-5 col-md-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h4 className="mb-3">Get in Touch</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

    
        <div className="col-lg-5 col-md-6 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4 d-flex flex-column">
              <h4 className="mb-3">Hotel Information</h4>

              <p className="mb-2">
                <strong>Address:</strong>
                <br />
                Candiclie Business Hotel,
                <br />
                Business District, Uttar Pradesh, India
              </p>

              <p className="mb-3">
                <strong>Phone:</strong> +91 07526069691
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info@candicliebusinesshotel.com">
                  info@candicliebusinesshotel.com
                </a>
              </p>

              <div className="mt-auto">
                <iframe
                  title="Hotel Location"
                  src="https://www.google.com/maps?q=UttarPradesh&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
