import QuickContacts from './QuickContacts';
import ContactForm from './ContactForm';

const Contact = () => (
  <section className='text-center bg-[var(--secondary-color)] p-8 md:px-4 md:py-16' id='contact'>
    <div className='flex justify-evenly flex-wrap md:flex-nowrap'>
      <QuickContacts />
      <ContactForm />
    </div>
  </section>
);

export default Contact;
