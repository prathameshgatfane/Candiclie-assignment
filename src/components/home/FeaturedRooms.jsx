import { Link } from "react-router-dom";

function FeaturedRooms() {
  const rooms = [
    {
    id: 1,
    name: "Executive Room",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: 6000,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
    {
      id: 3,
      name: "Suite Room",
      price: 9000,
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Featured Rooms</h2>

        <div className="row">
          {rooms.map((room) => (
            <div key={room.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={room.image}
                  className="card-img-top"
                  alt={room.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">
                    Starting from <strong>₹{room.price}</strong> / night
                  </p>

                  <Link to="/rooms" className="btn btn-success w-100">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
