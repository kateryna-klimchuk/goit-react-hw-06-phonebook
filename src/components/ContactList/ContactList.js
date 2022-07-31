import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/index';
import { List } from './ContactList.Styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const searchFilter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(searchFilter)
      );
    }
    return contacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
