import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import LoginPage from 'pages/LoginPage';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import MainTransactionsPage from 'pages/MainTransactionsPage/MainTransactionsPage';
import TransactionsHistoryPage from 'pages/TransactionsHistoryPage';
import { useDispatch } from 'react-redux';
import { loginUser } from 'my-redux/Auth/operations';
import { Test } from './Test';

const App = () => {
  const dispatch = useDispatch();

  dispatch(
    loginUser({
      email: 'dimka@mail.ua',
      password: 'password',
    })
  );

  // dispatch(refreshUser());

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/transactions/:transactionsType"
          element={<MainTransactionsPage />}
        />
        <Route
          path="/transactions/history/:transactionsType"
          element={<TransactionsHistoryPage />}
        />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default App;
