import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/store';
import { FilterDiv, Label, Input } from './Filter.Styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };
  return (
    <FilterDiv>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={changeFilter}
      />
    </FilterDiv>
  );
};

export default Filter;
