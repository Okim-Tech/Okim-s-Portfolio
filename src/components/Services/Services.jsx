import "./Services.css";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites for businesses that are fast, responsive and designed to build trust with customers.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Modern personal portfolio websites for developers, designers, students and professionals.",
  },
  {
    title: "School & Church Websites",
    description:
      "Clean, informative websites that help schools and churches connect with their communities.",
  },
  {
    title: "Full Stack Web Applications",
    description:
      "Interactive web applications with React, Node.js, Express and MongoDB.",
  },
  {
    title: "Website Maintenance",
    description:
      "Fix bugs, improve performance and keep existing websites secure and up to date.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <span className="section-tag">Services</span>

        <h2>What I Can Do For You</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
