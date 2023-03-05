import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      фільтер
      <input type="text" onChange={onChange} value={value} />
    </label>
  );
};
