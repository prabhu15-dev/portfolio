import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contacts.css";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";
const Contacts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show popup message directly without backend
    setResponseData({ message: "Form submitted successfully!" });
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 3000);
    e.target.reset();
  };

  // Replace with your actual Template ID and Public Key
  const SERVICE_ID = "service_30pepxp";
  const TEMPLATE_ID = "template_pnzn3kg"; // e.g. "template_xxxxx"
  const PUBLIC_KEY = "DC1N4wnXDi985c9ZM"; // e.g. "t5uC3o7nD1SXi" (starts with 't')

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setResponseData({ message: "Message sent successfully!" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        setResponseData({ message: "Failed to send message. Try again!" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    );
  };
  return (
    <section id="contacts" className="contacts-section">
      <div className="contacts-container">
        <h1 className="contacts-title">Contacts</h1>

        {/* Contact Cards */}
        <div className="contact-cards">
          <div className="contact-card-content">
            <Fade duration={1000} delay={200} direction="top">
              <div className="contact-card phone">
                <FaPhone className="contact-icon phone-icon" />
                <h3>Mobile</h3>
                <p>
                  <a href="tel:+91 9384205123">+91 9384205123</a>
                </p>
              </div>
            </Fade>
          </div>
          <div className="contact-card-content">
            <Fade duration={1000} delay={400} direction="top">
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <h3>Email</h3>
                <p>
                  <a href="mailto: prabhakaranaofficial@gmail.com">
                     prabhakaranaofficial@gmail.com
                  </a>
                </p>
              </div>
            </Fade>
          </div>
          <div className="contact-card-content">
            <Fade duration={1000} delay={600} direction="top">
              <div className="contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <h3>Address</h3>
                <p>
                  <a
                    href="https://www.google.com/maps/place/Pudukkottai,+Tamil+Nadu,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                    Pudukkottai, Tamil Nadu, India.
                  </a>
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="contact-form-map">
          <div className="contact-form-content">
            <div className="contact-form">
              <h2>Send a Message</h2>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Send a Message</button>
              </form>
            </div>
          </div>

          <div className="contact-map">
  <iframe
    src="https://www.google.com/maps?q=Thaila+Nagar,+Bala+Nagar,+Pudukkottai,+Tamil+Nadu+622001&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
      {showPopup && (
        <div
          className={`popup ${
            responseData?.message?.includes("successfully")
              ? "success"
              : "error"
          }`}
        >
          <p>{responseData?.message}</p>
        </div>
      )}
    </section>
  );
};

export default Contacts;
