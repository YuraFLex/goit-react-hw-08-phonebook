import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectLoading,
  selectError,
} from 'redux/сontacts/contactsSelectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/сontacts/contactsOperation';
import { filterContacts } from 'redux/filter/filterSlice';

import { Section } from '../../components/Section/Section';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { AddButton } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
// import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';

import s from '../ContactsPage/ContactPage.module.scss';

export const ContactsPage = () => {
  const [modalIsOpen, setmodalIsOpen] = useState('');
  const [currentContact, setcurrentContact] = useState(null);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    contacts.some(({ name }) => name === contact.name)
      ? Notify.failure(`${contact.name} is already in contacts!`)
      : dispatch(addContact(newContact));
  };

  const filtration = filterKey => {
    dispatch(filterContacts(filterKey));
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  const openModal = (param, contact) => {
    setmodalIsOpen(param);
    setcurrentContact(contact);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  return (
    <Section>
      <div className={s.contacts}>
        <div className={s.addButtonBox}>
          <h2 className={s.h2}>Contacts</h2>
          <AddButton type="button" openModal={openModal} />
        </div>
        <Filter filtration={filtration} />
        {isLoading && <p>Loading...</p>}
        {error && <p> {error} </p>}
        {!isLoading && !error && (
          <ContactList contactDelete={contactDelete} openModal={openModal} />
        )}
      </div>
      {modalIsOpen && (
        <Modal
          closeModal={closeModal}
          param={modalIsOpen}
          addNewContact={addNewContact}
          contact={currentContact}
        />
      )}
    </Section>
  );
};
