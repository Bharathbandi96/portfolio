import React from 'react';
import styles from '../component_styles/components.module.css';

const QuickContacts = () => (
    <div className='block w-[45%]'>
        <h2 className='text-[2rem] mb-4 text-[var(--secondary-font-color)]'>Quick Contact</h2>
        <p className={styles.contactImageContainer}>
            <i className={`${styles.contactImage} bx bxs-phone`} />
            <strong>Phone</strong>: +44 7770514283
        </p>
        <p className={styles.contactImageContainer}>
            <i className={`${styles.contactImage} bx bxl-gmail`} />
            <strong>Email</strong>: bharathbandi96@gmail.com
        </p>
        <p className={styles.contactImageContainer}>
            <i className={`${styles.contactImage} bx bxs-map`} />
            <strong>Location</strong>: Manchester, United Kingdom
        </p>
    </div>
)


export default QuickContacts;