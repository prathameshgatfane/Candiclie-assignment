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
    <section className="featured-rooms-section">
      <div className="container-xl">
        <h2 className="fw-bold text-center mb-5">
          Featured Rooms
        </h2>

        <div className="row g-4">
          {rooms.map((room) => (
            <div key={room.id} className="col-md-4">
              <div className="room-card h-100">
                
              
                <div className="room-image-wrapper">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-image"
                  />
                </div>

                
                <div className="room-content">
                  <h4 className="room-title">{room.name}</h4>

                  <p className="room-price">
                    Starting from <span>₹{room.price}</span> / night
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
