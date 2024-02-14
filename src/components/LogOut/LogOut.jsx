import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logoutUser } from 'my-redux/Auth/operations';
import s from './LogOut.module.css';

export const LogOut = ({ toggleLogOutModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate('/');
        toggleLogOutModal();
        toast.warning('In order to use the application you must log in');
      })
      .catch(() => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <p className={s.title}>Are you sure you want to log out?</p>
      <div className={s.container}>
        <button
          className={s.button}
          onClick={handleLogout}
          disabled={isLoading}
        >
          Log out
        </button>
        <button className={s.buttonCansel} onClick={toggleLogOutModal}>
          Cancel
        </button>
      </div>
    </>
  );
};
