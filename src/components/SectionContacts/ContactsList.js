import React from 'react';
import { useEffect, useState } from 'react';
import css from './SectionContacts.module.css';
import {
  useSelector,
  // useDispatch
} from 'react-redux';
import {
  // removeContact,
  useFetchContactsQuery,
} from '../../Redux/contactsSlice';
import { ContactsListItem } from './ContactsListItem';
import Loader from '../Loader/Loader';

const ContactsList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [filteredContacts, setFilteredContacts] = useState([]);
  // console.log(deleteContact);
  // const dispatch = useDispatch();
  // // const allContacts = useSelector(state => state.contacts);
  const inputValue = useSelector(state => state.filter);
  //
  // console.log(filteredContacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const filteredContacts = await contacts.filter(contact =>
          contact.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredContacts(filteredContacts);
      } catch (error) {}
    };
    fetchContacts();
  }, [contacts, inputValue]);

  return (
    <ul className={css.contactsList}>
      {isFetching && <Loader />}
      {filteredContacts &&
        filteredContacts.map(el => <ContactsListItem key={el.id} {...el} />)}
    </ul>
  );
};

export default ContactsList;
