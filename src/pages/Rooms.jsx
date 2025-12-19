import roomsData from "../data/roomsData";
import RoomCard from "../components/rooms/RoomCard";

function Rooms() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Our Rooms</h1>

      <div className="row justify-content-center">
        {roomsData.map((room) => (
          <div
            key={room.id}
            className="col-12 mb-4 d-flex justify-content-center"
          >
            <div className="w-100" style={{ maxWidth: "700px" }}>
              <RoomCard room={room} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Rooms;
