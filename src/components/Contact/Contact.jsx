import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <span className="section-tag">Contact Me</span>

        <h2>Let's Build Something Amazing Together</h2>

        <p className="contact-intro">
          Have a project in mind, need a website, or want to discuss an
          opportunity? I'd love to hear from you.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>okimpeace187@gmail.com</p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Owerri, Imo State, Nigeria</p>
            </div>

            <div className="contact-item">
              <h3>Availability</h3>
              <p>Open to freelance and remote opportunities</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea placeholder="Your Message" rows="6"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
