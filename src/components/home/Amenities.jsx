function Amenities() {
  const amenities = [
    "Free High-Speed Wi-Fi",
    "Conference & Meeting Rooms",
    "Business Lounge",
    "24/7 Front Desk",
    "In-House Restaurant",
    "Airport Shuttle",
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Our Amenities</h2>

        <div className="row">
          {amenities.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="border rounded p-4 text-center h-100">
                <h5 className="mb-0">{item}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
