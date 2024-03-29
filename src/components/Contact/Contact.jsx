import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

import styles from './Contact.module.css';

const Contact = ({ contactsData, deleteContact }) => {
  return contactsData.map(({ id, name, number }) => {
    return (
      <li
        key={id}
        className={styles.userItem}
        onClick={evt => deleteContact(id, evt)}
      >
        <div>
          <div className={styles.nameContainer}>
            <FaUser />
            <p>{name}</p>
          </div>
          <div className={styles.phoneContainer}>
            <FaPhone />
            <p>{number}</p>
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
