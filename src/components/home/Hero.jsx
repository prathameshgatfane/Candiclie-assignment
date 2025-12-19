import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-carousel">
      <div
        id="hotelHeroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
        
          <div className="carousel-item active hero-slide slide-1">
            <div className="hero-overlay">
              <div className="container">
                <div className="row align-items-center min-vh-100">
                  <div className="col-md-6 text-white">
                    <h1 className="display-5 fw-bold mb-3">
                      Experience Business-Class Comfort
                    </h1>
                    <p className="lead mb-4">
                      Luxury, comfort, and productivity at Candiclie Business Hotel.
                      Designed for professionals and corporate stays.
                    </p>
                    <Link to="/rooms" className="btn btn-success btn-lg">
                      View Rooms
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*....second image ka design.... */}
          <div className="carousel-item hero-slide slide-2">
            <div className="hero-overlay">
              <div className="container">
                <div className="row align-items-center min-vh-100">
                  <div className="col-md-6 text-white">
                    <h1 className="display-5 fw-bold mb-3">
                      Premium Rooms & Services
                    </h1>
                    <p className="lead mb-4">
                      Spacious rooms, modern amenities, and world-class hospitality.
                    </p>
                    <Link to="/contact" className="btn btn-warning btn-lg">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/*....third image ka design...*/}
          <div className="carousel-item hero-slide slide-3">
            <div className="hero-overlay">
              <div className="container">
                <div className="row align-items-center min-vh-100">
                  <div className="col-md-6 text-white">
                    <h1 className="display-5 fw-bold mb-3">
                      Perfect for Meetings & Conferences
                    </h1>
                    <p className="lead mb-4">
                      Conference halls, business lounges, and seamless connectivity.
                    </p>
                    <Link to="/rooms" className="btn btn-warning btn-lg">
                      Explore Facilities
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hotelHeroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hotelHeroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
