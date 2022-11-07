import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { ReactComponent as AddIcon } from '../../images/logo.svg';

import s from './Navigation.module.scss';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.home}>
          <Link to="/">
            <AddIcon />
          </Link>
        </li>
        {token && (
          <li>
            <Link className={s.navLink} to="/contacts">
              <button className={s.navItem}>Phonebook</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
