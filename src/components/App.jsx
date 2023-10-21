import { Suspense, lazy } from 'react';

const Filter = lazy(() => import('./Filter/Filter'));
const ContactList = lazy(() => import('./ContactList/ContactList'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));

export const App = () => {
  return (
    <Suspense>
      <div className="container">
        <div className="phonebook-wrapper">
          <h1 className="phonebook-title">Phonebook</h1>
          <ContactForm />
        </div>

        <h2 className="contacts-title">Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </Suspense>
  );
};
