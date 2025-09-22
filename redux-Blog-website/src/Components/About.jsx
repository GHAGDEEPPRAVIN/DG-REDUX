import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Beyond Borders</h1>
        <p>
          At <strong>Beyond Borders</strong>, we believe travel is more than just visiting places – 
          it’s about experiencing cultures, meeting people, and creating lifelong memories.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We curate the most authentic travel experiences to help you explore 
            the world beyond your comfort zone. From mountain treks to serene beaches, 
            we bring you closer to nature, history, and adventure.
          </p>
        </div>

        <div className="about-image">
          <img 
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg" 
            alt="Travel Adventure"
          />
        </div>
      </section>
    </div>
  );
}
