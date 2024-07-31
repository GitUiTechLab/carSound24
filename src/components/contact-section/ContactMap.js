import React from 'react';
import '../../css/Homepage.css';

const ContactMap = () => {
  return (
    <div className="contact-map">
      <div className="contact-details">
        <p><i className="fas fa-envelope"></i> hello@graphicsguruji.com</p>
        <p><i className="fas fa-phone"></i> +91 123 456 7890</p>
        <p><i className="fas fa-map-marker-alt"></i> 0123 Add Your Location City Name, IN 123456</p>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509507!2d144.95373631531665!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e38064493d6!2sEnvato!5e0!3m2!1sen!2sin!4v1579155176202!5m2!1sen!2sin" 
          width="500" 
          height="400" 
          frameborder="0" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
