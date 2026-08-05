import "./Services.css";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaRocket,
  FaChartPie,
  FaLayerGroup,
  FaGraduationCap,
  FaWrench,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBriefcase />,
    title: "Business & Portfolio Websites",
    description:
      "Modern, fast, and responsive websites designed to showcase your brand, build trust, and turn visitors into clients.",
  },
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    description:
      "High-converting, optimized landing pages tailored for product launches, marketing campaigns, and lead generation.",
  },
  {
    icon: <FaChartPie />,
    title: "Admin Dashboards & Portals",
    description:
      "Custom administrative panels, user management systems, and interactive dashboards to manage your data effortlessly.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Web Applications",
    description:
      "Scalable dynamic web applications built from scratch using React, Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaGraduationCap />,
    title: "School & Church Websites",
    description:
      "Clean, informative portals and community platforms that help schools, churches, and organizations connect with members.",
  },
  {
    icon: <FaWrench />,
    title: "Website Maintenance & Support",
    description:
      "Bug fixing, performance optimization, feature updates, and security patches to keep your existing apps running smooth.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">Services</span>

        <h2>What I Can Do For You</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
