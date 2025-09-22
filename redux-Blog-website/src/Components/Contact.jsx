import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether it’s a question, feedback, or collaboration idea, reach out to us.</p>

      <div className="contact-grid">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: info@beyondborders.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Travel Street, Adventure City</p>
        </div>
      </div>
    </div>
  );
}
