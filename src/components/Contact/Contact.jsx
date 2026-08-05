import "./Contact.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=okimpeace187@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="email-link"
                >
                  okimpeace187@gmail.com
                </a>
              </p>
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

          <div>
            {status === "success" && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully. I'll get
                back to you as soon as possible.
              </div>
            )}

            {status === "error" && (
              <div className="error-message">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
