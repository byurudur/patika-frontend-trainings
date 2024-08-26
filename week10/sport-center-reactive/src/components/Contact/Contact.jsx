import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
