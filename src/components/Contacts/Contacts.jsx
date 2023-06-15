import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonDelete,
  ContactName,
  ContactPhone,
  ContactsContainer,
  ContactsItem,
  Loader,
  Title,
} from './Contacts.styled';
import Filter from 'components/Filter/Filter';
import {
  deleteContactThunk,
  fetchContactThunk,
} from 'store/contacts/contactsOperations';
import { setToken } from 'services/phonebookAPI';

function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const loader = useSelector(state => state.contacts.isLoading);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) return;

    setToken(token);
    dispatch(fetchContactThunk());
  }, [dispatch, token]);

  const contacts = useSelector(state => state.contacts.users);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsContainer>
      <Filter />
      <Title>Contacts</Title>
      <div>
        {filterContacts.map(contact => (
          <ContactsItem key={contact.id}>
            <ContactName key={`${contact.id}-name`}>
              {contact.name}:
            </ContactName>
            <ContactPhone
              key={`${contact.id}-phone`}
              href={`tel:${contact.number}`}
            >
              {contact.number}
            </ContactPhone>
            <ButtonDelete
              onClick={() => dispatch(deleteContactThunk(contact?.id))}
            >
              Delete
            </ButtonDelete>
          </ContactsItem>
        ))}
      </div>
      {loader && (
        <div>
          <Loader></Loader>
        </div>
      )}
    </ContactsContainer>
  );
}

export default Contacts;
