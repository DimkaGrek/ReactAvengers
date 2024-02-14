import AuthForm from '../../components/AuthForm/AuthForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.container}>
      <AuthForm signIn />
    </div>
  );
};

export default LoginPage;
