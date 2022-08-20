import React, { useContext } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from '../../store/auth-context';

const MainHeader = () => {
  const ctx = useContext(AuthContext);
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={ctx.onLogout} />
    </header>
  );
};

export default MainHeader;
