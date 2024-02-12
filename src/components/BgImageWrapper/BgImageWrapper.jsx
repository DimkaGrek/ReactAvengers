import React, { useState, useRef, useEffect } from 'react';

import s from './BgImageWrapper.module.css';
import { Icon } from '../Icon/Icon';

export const BgImageWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animationDuration] = useState(15);
  const [randomSum, setRandomSum] = useState(0);
  const [randomPercent, setRandomPercent] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const randomNumber = () =>
      Math.floor(Math.random() * (10000 - 500 + 1) + 500);

    setRandomSum(randomNumber());

    const randomPercentage = () => Math.random() * (100 - 1) + 1;
    setRandomPercent(randomPercentage());
  }, [currentStep]);

  const handleAnimationStart = () => {
    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateAnimationProgress = () => {
    const elapsedTime = performance.now() - startTimeRef.current;
    const percentage = (elapsedTime / (animationDuration * 1000)) * 100;

    updateCurrentStep(percentage);

    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateCurrentStep = percentage => {
    setCurrentStep(prevStep => {
      const newStep = Math.ceil(percentage / 12.5);
      return newStep !== prevStep ? newStep : prevStep;
    });
  };

  return (
    <div className={s.containerImg}>
      <div className={s.containerText} onAnimationStart={handleAnimationStart}>
        <div className={s.containerSvg}>
          <Icon name="arrow-up" className={s.icon} size="18" />
        </div>
        <div className={s.containerBalance}>
          <p className={s.text}>Your balance</p>
          <p className={s.balance}>{`$${randomSum}`}</p>
        </div>
        <div className={s.containerPercent}>
          <p className={s.percent}>{`+${randomPercent.toFixed(2)}%`}</p>
        </div>
        <p className={s.dynamicText}></p>
      </div>
    </div>
  );
};
