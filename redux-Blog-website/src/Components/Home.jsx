import "../styles/home.css"

export default function Home() {
  return (
    <div>

      <section className="hero">
        <div className="hero-text">
          <h1 style={{ margin: "50px 0px" }}>Explore the World Beyond Borders</h1>
          <p style={{ margin: "0px 0px 40px 0px" }}>
            Curated adventures, breathtaking locations, and unforgettable memories await you.
          </p>
          <a href="#destinations">Discover Now</a>
        </div>
      </section>

      <section className="destinations" id="destinations">
        <h2 style={{ margin: "50px 0px" }}>Top Destinations</h2>
        <div className="cards">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/27367865/pexels-photo-27367865.png"
              alt="Mountains"
            />
            <div className="card-body">
              <h3>Everest Ridge</h3>
              <p>Adventure trekking in the heart of the Himalayas.</p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg"
              alt="Beach"
            />
            <div className="card-body">
              <h3>Rio Coastline</h3>
              <p>Experience the vibrant beach life of Brazil.</p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/53537/caravan-desert-safari-dune-53537.jpeg"
              alt="Desert"
            />
            <div className="card-body">
              <h3>Sahara Dunes</h3>
              <p>Golden sands and starry skies like nowhere else.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        &copy; 2025 Beyond Borders. All rights reserved.
      </footer>
      
    </div>
  )
}
