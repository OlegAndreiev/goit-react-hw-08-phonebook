import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './SectionForm.module.css';
import Loader from '../Loader/Loader';
import {
  // addContact,
  useFetchContactsQuery,
  useAddContactMutation,
} from '../../Redux/contactsSlice';

export default function Form() {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const handleInputChangeName = event => {
    const { value } = event.currentTarget;
    setId(nanoid());
    setName(value);
  };

  const handleInputChangeNumber = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : addContact({
          name: event.currentTarget.elements.name.value,
          phone: event.currentTarget.elements.number.value,
        });
    reset();
  };

  //  const handleSubmit = event => {
  //    event.preventDefault();
  //    onSubmit({ id, name, number });
  //    reset();
  //  };

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={css.labelInput}
            onChange={handleInputChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className={css.labelInput}
            onChange={handleInputChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={css.formButton} type="submit">
        {isAdding ? <Loader /> : 'Add contact'}
      </button>
    </form>
  );
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
