import React from 'react';

import s from './BgImageWrapper.module.css';
import heroDesc1x from '../../assets/images/heroDesc1x.jpg';
import { Icon } from '../Icon/Icon';

export const BgImageWrapper = () => {
  return (
    <div className={s.containerImg}>
      <img src={heroDesc1x} alt="Hero Description" className={s.heroImg} />
      <div className={s.containerText}>
        <div className={s.containerSvg}>
          <Icon name="arrow-up" className={s.icon} size="18" />
        </div>
        <div className={s.containerBalance}>
          <p className={s.text}>Your balance</p>
          <p className={s.balance}>$632.000</p>
        </div>
        <div className={s.containerPercent}>
          <p className={s.percent}>+1.29%</p>
        </div>
      </div>
    </div>
  );
};
