import React from 'react';
import css from './SectionContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../Redux/contacts/contactsSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);

  const filterForContacts = event => {
    const inputData = event.currentTarget.value;
    dispatch(filterContact(inputData));
  };

  return (
    <label className={css.filterLabel}>
      {/* Find contacts by name
      <input
        className={css.labelInput}
        type="text"
        value={inputValue}
        onChange={filterForContacts}
      ></input> */}
      <TextField
        // required
        id="outlined-required"
        label="Find contacts by name"
        // defaultValue="Name"
        type="text"
        value={inputValue}
        onChange={filterForContacts}
      />
    </label>
  );
};

// export default Filter;
