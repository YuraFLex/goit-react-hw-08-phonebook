import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import s from './Section.module.scss';

export const Section = ({ children }) => {
  const token = useSelector(selectToken);
  return <>{token && <section className={s.section}> {children}</section>}</>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
