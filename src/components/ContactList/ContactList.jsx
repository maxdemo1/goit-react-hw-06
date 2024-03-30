import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { contactsSelector, filterSelector } from '../../redux/selectors';

const ContactList = () => {
  const filter = useSelector(filterSelector);

  const contactsData = useSelector(contactsSelector);

  const visibleContact = (contactsData, filter) => {
    if (filter === '') return contactsData;
    return contactsData.filter(contact => contact.name.includes(filter));
  };

  return (
    <ul className={styles.contactsList}>
      <Contact contactsData={visibleContact(contactsData, filter)} />
    </ul>
  );
};

export default ContactList;
