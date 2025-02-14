import QuickContacts from './QuickContacts';
import ContactForm from './ContactForm';

const Contact = () => (
  <section className='text-center bg-[var(--secondary-color)] px-4 py-16' id='contact'>
    <div className='flex justify-evenly flex-nowrap'>
      <QuickContacts />
      <ContactForm />
    </div>
  </section>
);

export default Contact;
