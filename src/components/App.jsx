import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import LoginPage from 'pages/LoginPage';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import MainTransactionsPage from 'pages/MainTransactionsPage';
import TransactionsHistoryPage from 'pages/TransactionsHistoryPage';

const App = () => {
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
      </Route>
    </Routes>
  );
};

export default App;
