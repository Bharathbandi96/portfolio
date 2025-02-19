'use client'
import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import styles from '../component_styles/components.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = useCallback((
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }, [formData]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        debugger;
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sendEmail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await res.json();
            if (result.success) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            } else {
                setStatus('There is error in handling mail service');
            }
        } catch (error) {
            if (error) {
                setStatus('There is an error in sending mail.')
            } else {
                setStatus('Failed to send message');
            }
        }
    };
    return (
        <div className='block w-[100%] md:w-[45%]'>
            <h2 className='text-[2rem] mb-4 text-[var(--secondary-font-color)]'>Contact Me</h2>
            <form className='max-w-[500px] my-0 mx-auto' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.formFields}
                    placeholder="Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    className={styles.formFields}
                    placeholder="Email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Message"
                    className={`${styles.formFields} min-h-[150px]`}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {status && <p className='px-2 text-[var(--secondary-font-color)]'>
                    {status}
                </p>}
                <button type="submit" className='border border-[var(--theme-font-color)] py-[0.8rem] px-[1.5rem] rounded-full font-bold text-[var(--theme-font-color)] bg-[var(--background)] hover:text-[var(--background)] hover:bg-[var(--theme-font-color)]'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;