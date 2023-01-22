import React from 'react';
import css from './SectionContacts.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../Redux/contacts/selectors';
import { ContactsListItem } from './ContactsListItem';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactsList}>
      {filteredContacts &&
        filteredContacts.map(el => <ContactsListItem key={el.id} {...el} />)}
    </ul>
  );
};
