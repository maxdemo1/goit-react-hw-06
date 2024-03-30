import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import styles from './Contact.module.css';

import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contactsData }) => {
  const dispatch = useDispatch();

  return contactsData.map(({ id, name, phoneNumber }) => {
    return (
      <li
        key={id}
        className={styles.userItem}
        onClick={evt => {
          if (evt.target.nodeName !== 'BUTTON') return;

          dispatch(deleteContact(id));
        }}
      >
        <div>
          <div className={styles.nameContainer}>
            <FaUser />
            <p>{name}</p>
          </div>
          <div className={styles.phoneContainer}>
            <FaPhone />
            <p>{phoneNumber}</p>
          </div>
        </div>

        <button type="button" className={styles.deleteButton}>
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;
