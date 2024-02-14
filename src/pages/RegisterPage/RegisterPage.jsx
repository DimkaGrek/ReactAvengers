import AuthForm from '../../components/AuthForm/AuthForm';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <AuthForm signUp />
    </div>
  );
};

export default RegisterPage;
