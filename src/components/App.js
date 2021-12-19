import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';
import s from './app.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h1 className={s.main_header}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contacts_header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
