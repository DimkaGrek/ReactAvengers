import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import MainTransactionsPage from 'pages/MainTransactionsPage/MainTransactionsPage';
import TransactionsHistoryPage from 'pages/TransactionsHistoryPage';
import { useDispatch } from 'react-redux';
import { loginUser, refreshUser } from 'my-redux/Auth/operations';
import WelcomePage from 'pages/Home';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  dispatch(
    loginUser({
      email: 'marta@test.com',
      password: 'marta@test.com',
    })
  );

  // dispatch(refreshUser());

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />

        <Route
          path="/login"
          element={
            <PublicRoute
              component={<LoginPage />}
              redirectTo="/transactions/expences"
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
      </Route>
    </Routes>
  );
};

export default App;
