import { selectIsLoggedIn } from 'my-redux/Auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
