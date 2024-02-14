import React, { useState, useRef, useEffect } from 'react';

import { Icon } from '../Icon/Icon';
import { randomNumber, randomPercentage } from 'helpers/getRandomNumber';
import s from './BgImageWrapper.module.css';

export const BgImageWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animationDuration] = useState(15);
  const [randomSum, setRandomSum] = useState(0);
  const [randomPercent, setRandomPercent] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const viewportWidthRef = useRef(window.innerWidth);

  useEffect(() => {
    setRandomSum(randomNumber());
    setRandomPercent(randomPercentage());
  }, [currentStep]);

  const handleAnimationStart = () => {
    const viewportWidth = window.innerWidth;
    viewportWidthRef.current = viewportWidth;

    if (viewportWidth < 768) {
      return;
    }

    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  };

  const updateAnimationProgress = () => {
    const elapsedTime = performance.now() - startTimeRef.current;
    const percentage = (elapsedTime / (animationDuration * 1000)) * 100;

    // Check if viewport width has changed during the animation
    if (
      viewportWidthRef.current !== window.innerWidth &&
      window.innerWidth < 768
    ) {
      return;
    }

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
