import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';

function App() {
  const [contactsData, setContactsData] = useState(
    localStorage.getItem('usersData')
      ? JSON.parse(localStorage.getItem('usersData'))
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
  );

  const [seacrhValue, setSeacrhValue] = useState('');

  const deleteContact = (id, evt) => {
    if (evt.target.nodeName !== 'BUTTON') return;

    setContactsData(prevState => {
      return prevState.filter(signleUser => signleUser.id !== id);
    });
  };

  const addContact = ({ username, phoneNumber }, actions) => {
    actions.resetForm();
    const userId = nanoid(5);
    setContactsData(prevState => {
      return [
        ...prevState,
        {
          id: userId,
          name: username,
          number: `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
            3,
            5
          )}-${phoneNumber.substring(5, 7)}`,
        },
      ];
    });
  };

  const resultsOfSearch = contactsData.filter(signleUser => {
    for (const userData in signleUser) {
      if (
        signleUser[userData]
          .toLowerCase()
          .includes(seacrhValue.toLowerCase().trim())
      )
        return true;
    }
  });

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(contactsData));
  }, [contactsData]);

  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm addUser={addContact} />
      <SearchBox filterUserData={setSeacrhValue} value={seacrhValue} />
      <ContactList
        contactsData={resultsOfSearch}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
