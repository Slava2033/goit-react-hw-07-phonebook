import React from 'react';
import PropTypes from 'prop-types';
import s from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          <span className={s.listItemText}>{name}:</span>
          <span className={s.listItemText}>{number}</span>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
