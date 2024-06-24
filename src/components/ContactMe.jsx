import React, { useState } from 'react';
import '../Styles/ContactMe.css'; 
import { Link } from 'react-router-dom';

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      setSubscriptionSuccess(true);
    }, 1000); 
  };

  return (
    <div className='main-contact-form-containter'>
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Shop BRNT</p>
        <p>123 Main Street, City, Country</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@shopbrnt.com</p>
        <p>Website: <Link to={'/'} target="_blank" rel="noopener noreferrer">www.shopbrnt.com</Link></p>
      </div>

      <form onSubmit={handleSubmit} className="subscription-form">
        <h2>Subscribe to Our Newsletter</h2>
        <label htmlFor="email">Email:</label>
        <input className='email-input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='submit-btn-1' type="submit">Subscribe</button>
      </form>

      {subscriptionSuccess && (
        <div className="subscription-success">
          Subscription successful! You will receive our latest news and updates.
        </div>
      )}
    </div>
    </div>
  );
};

export default ContactMe;
