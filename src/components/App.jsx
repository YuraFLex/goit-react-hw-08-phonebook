import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';
export const App = () => {
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
