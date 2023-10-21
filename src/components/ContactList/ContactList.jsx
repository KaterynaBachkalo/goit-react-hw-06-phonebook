import { Suspense, lazy } from 'react';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { useFilter, useContacts } from '../../hooks/useSelectors';

const ContactItem = lazy(() => import('components/ContactItem/ContactItem'));

const ContactList = () => {
  const filter = useFilter();
  const contacts = useContacts();

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Suspense>
      <ul className={css.list}>
        {filteredContacts.map(({ name, id, number }) => (
          <ContactItem
            name={name}
            id={id}
            key={id}
            number={number}
            deleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </Suspense>
  );
};

export default ContactList;
