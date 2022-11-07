import { Link } from 'react-router-dom';

import s from './AuthNavigation.module.scss';

export const AuthNavigation = () => {
  return (
    <ul className={s.authNavList}>
      <li>
        <Link className={s.authNavLink} to="/register">
          <button className={s.authNavItem}>Registaration</button>
        </Link>
      </li>
      <li>
        <Link className={s.authNavLink} to="/login">
          <button className={s.authNavItem}>Login</button>
        </Link>
      </li>
    </ul>
  );
};
