import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Candiclie Business Hotels
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hotelNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="hotelNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/rooms">
                Rooms
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          
          <form className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <input
              className="form-control form-control-sm glass-input"
              type="search"
              placeholder="Search rooms"
            />
          </form>

          
          <Link
            to="/book"
            className="btn btn-success btn-sm ms-lg-3 mt-3 mt-lg-0 fw-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
