'use client'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './components.module.css';
// import handler from '../../../backend/mailer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    debugger;
    try {
      // const res = await fetch(`${process.env.BACKEND_URL}/api/send-email`, {
      const res = await fetch('http://localhost:5000/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      debugger;
      const result = await res.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setStatus(result.error);
      }
    } catch (error) {
      console.error(error);
      error ? setStatus(error as string) : setStatus('Failed to send message');
    }
  };

  return (
    <section className={styles.contact} id='contact'>
      <div className={styles.contactContainer}>
        <div className={styles.contactSubContainer}>
          <h2>Quick Contact</h2>
          <p><i className='bx bxs-phone'></i><strong>Phone</strong>: +44 7770514283</p>
          <p><i className='bx bxl-gmail'></i><strong>Email</strong>: bharathbandi96@gmail.com</p>
          <p><i className='bx bxs-map'></i><strong>Location</strong>: Flat 1, 210 Eccles Old Road, Salford, Manchester, United Kingdom - M6 8AL</p>
        </div>
        <div className={styles.contactSubContainer}>
          <h2>Contact Me</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </section>
  );
};
export default Contact;
