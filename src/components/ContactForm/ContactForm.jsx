import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { useContacts } from '../../hooks/useSelectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useContacts();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

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

    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.title}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.title}>
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
