import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export const App = () => {
  return (
    <div className="container">
      <div className="phonebook-wrapper">
        <h1 className="phonebook-title">Phonebook</h1>
        <ContactForm />
      </div>

      <h2 className="contacts-title">Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
