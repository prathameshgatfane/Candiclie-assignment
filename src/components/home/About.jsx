function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 className="about-title">About Candiclie Business Hotel</h2>
            <p className="about-text lead">
              Candiclie Business Hotels is designed for modern business travelers who
              value comfort, efficiency, and elegance. Located in the heart of
              the city, our hotel provides premium services for corporate stays,
              meetings, and conferences.
            </p>

            <p className="about-text">
              With world-class amenities, spacious rooms, and professional
              hospitality, we ensure a productive and relaxing experience for
              every guest.
            </p>
          </div>

          <div className="col-md-6 text-center">
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
