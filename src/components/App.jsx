import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import MainTransactionsPage from 'pages/MainTransactionsPage/MainTransactionsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { useDispatch } from 'react-redux';
import { loginUser } from 'my-redux/Auth/operations';
import { Test } from './Test';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import TransactionsHistoryPage from 'pages/TransactionsHistoryPage';

const App = () => {
  const dispatch = useDispatch();
  // dispatch(
  //   loginUser({
  //     email: 'dimka@mail.ua',
  //     password: 'password',
  //   })
  // );

  // dispatch(refreshUser());

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute
              component={<WelcomePage />}
              redirectTo="/transactions/expences"
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
