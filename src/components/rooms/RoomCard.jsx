function RoomCard({ room }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={room.image} className="card-img-top" alt={room.name} />

      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">{room.description}</p>
        <p className="fw-bold">₹{room.price} / night</p>

        <button className="btn btn-success w-100">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
