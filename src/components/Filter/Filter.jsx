import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilters } from 'redux/contactSlice';
import { useFilter } from '../../hooks/useSelectors';

const Filter = () => {
  const filter = useFilter();
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setFilters(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find contacts name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={filterChange}
      />
    </label>
  );
};

export default Filter;
