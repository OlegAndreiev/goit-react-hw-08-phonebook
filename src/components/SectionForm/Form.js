import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contacts/operations';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './SectionForm.module.css';
import Loader from '../Loader/Loader';
// import {
//   // addContact,
//   useFetchContactsQuery,
//   useAddContactMutation,
// } from '../../Redux/contacts/contactsSlice';
import {
  selectContacts,
  selectIsLoading,
} from '../../Redux/contacts/selectors';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

export const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const { data: contacts } = useFetchContactsQuery();
  // const [addContact, { isLoading: isAdding }] = useAddContactMutation();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

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
      : dispatch(
          addContact({
            name: event.currentTarget.elements.name.value,
            number: event.currentTarget.elements.number.value,
          })
        );
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
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label className={css.formLabel}>
            {/* Name */}
            {/* <input
            type="text"
            name="name"
            value={name}
            className={css.labelInput}
            onChange={handleInputChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          /> */}
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue="Name"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </label>

          <label className={css.formLabel}>
            {/* Number */}
            {/* <input
            type="tel"
            name="number"
            value={number}
            className={css.labelInput}
            onChange={handleInputChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /> */}
            <TextField
              required
              id="outlined-required"
              label="Number"
              defaultValue="Number"
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </label>
        </div>
        {/* <button className={css.formButton} type="submit">
        {isLoading ? <Loader /> : 'Add contact'}
      </button> */}
        <Tooltip title="Add new contact" sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab type="submit" color="blue" aria-label="add" title="dfds">
            {isLoading ? <Loader /> : <AddIcon />}
          </Fab>
        </Tooltip>
      </form>
      <p style={{ margin: 0, fontSize: 12, color: '#9e9e9e' }}>* - required</p>
    </div>
  );
};

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
