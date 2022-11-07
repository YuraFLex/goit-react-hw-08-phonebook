import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Contact } from './ContactItem';
import { DeleteButton, EditButton } from '../Button/Button';
import s from './ContactList.module.scss';

export const ContactList = ({ contactDelete, openModal }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <ul className={s.list}>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
            <div className={s.buttonBox}>
              <EditButton
                type="button"
                openModal={openModal}
                contact={contact}
              />
              <DeleteButton
                type="button"
                contactDelete={contactDelete}
                contactId={contact.id}
              />
            </div>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactDelete: PropTypes.func.isRequired,
};
