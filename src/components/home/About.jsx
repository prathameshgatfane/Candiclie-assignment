function About() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">About Candiclie Business Hotel</h2>
            <p>
              Candiclie Business Hotel is designed for modern business travelers who
              value comfort, efficiency, and elegance. Located in the heart of
              the city, our hotel provides premium services for corporate stays,
              meetings, and conferences.
            </p>
            <p>
              With world-class amenities, spacious rooms, and professional
              hospitality, we ensure a productive and relaxing experience for
              every guest.
            </p>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Hotel Interior"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
