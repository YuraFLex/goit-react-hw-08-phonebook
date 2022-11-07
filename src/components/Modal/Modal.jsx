import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { EditContactForm } from '../EditContactForm/EditContactForm';
import { ContactForm } from 'components/ContactForm/ContactForm';

import s from '../Modal/Modal.module.scss';

export const Modal = ({ closeModal, param, addNewContact, contact }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <>
      <div className={s.overlay} onClick={closeByBackdrop}>
        <div className={s.modal}>
          {param === 'edit' && (
            <EditContactForm contact={contact} closeModal={closeModal} />
          )}
          {param === 'add' && <ContactForm addNewContact={addNewContact} />}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
