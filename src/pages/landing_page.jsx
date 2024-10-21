import React, { useState } from 'react';

const ContactsPicker = () => {
  const [contacts, setContacts] = useState([]);

  const handleGetContacts = async () => {
    if (!('contacts' in navigator) || !('select' in navigator.contacts)) {
      alert('Contacts API not supported on this browser.');
      return;
    }

    try {
      const props = ['name', 'tel', 'email'];
      const opts = { multiple: true };
      const selectedContacts = await navigator.contacts.select(props, opts);
      setContacts(selectedContacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <div>
      <h1>Contact Picker</h1>
      <button onClick={handleGetContacts}>Pick Contacts</button>

      <div>
        {contacts.length > 0 ? (
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <strong>Name:</strong> {contact.name.join(', ')} <br />
                <strong>Phone:</strong>{' '}
                {contact.tel ? contact.tel.join(', ') : 'N/A'} <br />
                <strong>Email:</strong>{' '}
                {contact.email ? contact.email.join(', ') : 'N/A'}
              </li>
            ))}
          </ul>
        ) : (
          <p>No contacts selected.</p>
        )}
      </div>
    </div>
  );
};

export default ContactsPicker;
