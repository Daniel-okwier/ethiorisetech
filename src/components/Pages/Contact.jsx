import { useState, useEffect } from 'react'; // Import useEffect
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Daniel Okwier', 
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send('1122', 'template_0c3osbs', templateParams, 'wjRtFyAyNVLZzKW07')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  useEffect(() => {
    document.title = "Contact Us"; // Set the title for Contact page
  }, []);

  return (
    <div className="contact-container">
      {submitted ? (
        <p className="thank-you-message">Thank you for reaching out! Your message has been received.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;