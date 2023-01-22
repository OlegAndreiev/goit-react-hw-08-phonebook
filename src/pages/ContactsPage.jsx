import * as React from 'react';
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
import css from '../components/SectionForm/SectionForm.module.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Loader from '../components/Loader/Loader';
import Typography from '@mui/material/Typography';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectContacts);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Paper
      elevation={2}
      style={{
        width: 400,
        padding: 20,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        backgroundColor: 'white',
      }}
    >
      <section className={css.section__header}>
        <Typography
          variant="h1"
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 0,
            paddingTop: 40,
            fontSize: 48,
          }}
        >
          PHONEBOOK
        </Typography>
      </section>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ minWidth: '0px' }}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText
            primary="Add new contact"
            sx={{ textAlign: 'center' }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <SectionForm>
            <Form />
          </SectionForm>
        </Collapse>
      </List>
      <SectionContacts title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        {items.length > 0 && <ContactsList />}
      </SectionContacts>
    </Paper>
  );
}
