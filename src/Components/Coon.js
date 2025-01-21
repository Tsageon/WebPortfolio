import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './coon.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return;
    }

    Swal.fire({
      title: 'Sending message...',
      text: 'Please wait while we send your message.',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch('https://nodemailer-js.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


if (!response.ok) {
  console.error('Fetch error:', response.statusText);
  throw new Error('Failed to send message');
}

      const data = await response.json();

      if (data.success) {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Something went wrong!',
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="headingContact">
      <h1>Contact Me</h1>
      <p>If you have any questions, feel free to send me a message and I'll get back to you!</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;