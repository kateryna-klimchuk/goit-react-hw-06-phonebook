import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { Title, SectionName, Container } from './App.Styled';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SectionName>Contacts</SectionName>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
