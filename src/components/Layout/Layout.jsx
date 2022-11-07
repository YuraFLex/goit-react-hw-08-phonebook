import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';

import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.layoutBox}>
      <AppBar />
      <UserAuthMenu />
      <Outlet />
    </div>
  );
};
