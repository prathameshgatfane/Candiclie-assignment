function Amenities() {
  const amenities = [
    {
      label: "Free High-Speed Wi-Fi",
      icon: "bi-wifi",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Conference & Meeting Rooms",
      icon: "bi-easel2",
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Business Lounge",
      icon: "bi-briefcase",
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "24/7 Front Desk",
      icon: "bi-clock-history",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "In-House Restaurant",
      icon: "bi-cup-hot",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Airport Shuttle",
      icon: "bi-car-front",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="amenities-section">
      <div className="container-xl">
        <h2 className="fw-bold text-center mb-5">Our Amenities</h2>

        <div className="row g-4">
          {amenities.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="amenity-card h-100">

              
                <div className="amenity-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="amenity-image"
                  />
                </div>

                
                <div className="amenity-text-row">
                  <span className="amenity-icon-left">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <h5 className="amenity-title mb-0">{item.label}</h5>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
