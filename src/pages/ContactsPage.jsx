import Form from '../components/SectionForm/Form';
import SectionForm from '../components/SectionForm/SectionForm';
import SectionContacts from '../components/SectionContacts/SectionContacts';
import ContactList from '../components/SectionContacts/ContactsList';
import Filter from '../components/SectionContacts/Filter';

export default function Contacts() {
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
      <ContactList />
    </SectionContacts>
  </div>;
}
