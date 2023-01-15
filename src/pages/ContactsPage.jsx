import { useEffect } from 'react';
import { Form } from '../components/SectionForm/Form';
import { SectionForm } from '../components/SectionForm/SectionForm';
import { SectionContacts } from '../components/SectionContacts/SectionContacts';
import { ContactsList } from '../components/SectionContacts/ContactsList';
import { Filter } from '../components/SectionContacts/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectContacts,
  selectError,
} from '../Redux/contacts/selectors';
import { fetchContacts } from '../Redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        width: 400,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: 'white',
      }}
    >
      <SectionForm title="Phonebook">
        <Form />
      </SectionForm>
      <SectionContacts title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {items.length > 0 && <ContactsList />}
      </SectionContacts>
    </div>
  );
}
