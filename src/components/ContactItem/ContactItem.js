import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.Styled';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number, id } = contact;
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        x
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
