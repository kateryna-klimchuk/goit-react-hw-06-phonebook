import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.Styled';
import { deleteContact } from 'redux/store';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const { name, number, id } = contact;
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={() => deleteContactById(id)}>
        x
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
