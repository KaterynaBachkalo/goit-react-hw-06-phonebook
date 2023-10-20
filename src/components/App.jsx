import { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilters } from 'redux/contactSlice';

const Filter = lazy(() => import('./Filter/Filter'));
const ContactList = lazy(() => import('./ContactList/ContactList'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));

export const App = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const addContactToPhonebook = (name, number) => {
    const isExistContactName = contacts.some(contact => name === contact.name);

    if (isExistContactName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const filterChange = e => {
    dispatch(setFilters(e.currentTarget.value));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Suspense>
      <div className="container">
        <div className="phonebook-wrapper">
          <h1 className="phonebook-title">Phonebook</h1>
          <ContactForm addContact={addContactToPhonebook} />
        </div>

        <h2 className="contacts-title">Contacts</h2>
        <Filter filter={filter} onChange={filterChange} />

        <ContactList
          contacts={filteredContacts()}
          deleteContact={onDeleteContact}
        />
      </div>
    </Suspense>
  );
};
