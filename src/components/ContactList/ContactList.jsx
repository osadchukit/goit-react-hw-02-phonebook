import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  //   console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} <span>{number}</span>
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
