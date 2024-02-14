import { Icon } from 'components';
import style from './BurgerMenuBtn.module.css';

const BurgerMenuBtn = ({ toggleMenu }) => {
  return (
    <button className={style.burgerMenuBtn} onClick={toggleMenu}>
      <Icon name="burger-menu" className={style.burgerMenuBtn} />
    </button>
  );
};

export default BurgerMenuBtn;
