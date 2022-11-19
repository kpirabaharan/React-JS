import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      <Header onLogout={logoutHandler} />
      {!isAuth && <Auth onLogin={loginHandler} />}
      <Counter />
    </Fragment>
  );
}

export default App;
