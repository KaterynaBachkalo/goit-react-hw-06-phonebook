import { Suspense, lazy } from 'react';
import css from './ContactList.module.css';

const ContactItem = lazy(() => import('components/ContactItem/ContactItem'));

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Suspense>
      <ul className={css.list}>
        {contacts.map(({ name, id, number }) => (
          <ContactItem
            name={name}
            id={id}
            key={id}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </Suspense>
  );
};

export default ContactList;
