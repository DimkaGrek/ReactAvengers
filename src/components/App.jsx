import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import MainTransactionsPage from 'pages/MainTransactionsPage/MainTransactionsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, refreshUser } from 'my-redux/Auth/operations';
import { Test } from './Test';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import TransactionsHistoryPage from 'pages/TransactionsHistoryPage';
import { selectIsRefreshing } from 'my-redux/Auth/authSlice';
import Loader from './Loader/Loader';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(
      loginUser({
        email: 'dimka@mail.ua',
        password: 'password',
      })
    );
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute
              component={<WelcomePage />}
              redirectTo="/transactions/expenses"
            />
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute
              component={<LoginPage />}
              redirectTo="/transactions/expenses"
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute component={<RegisterPage />} redirectTo="/login" />
          }
        />
        <Route
          path="/transactions/:transactionsType"
          element={
            <PrivateRoute
              component={<MainTransactionsPage />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/transactions/history/:transactionsType"
          element={
            <PrivateRoute
              component={<TransactionsHistoryPage />}
              redirectTo="/login"
            />
          }
        />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default App;
