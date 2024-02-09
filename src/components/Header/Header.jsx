import React, { useState } from 'react';
import headerStyles from './headerStyles.module.css';
import DropDownMenu from './DropDownMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <div className={headerStyles.logoWrapper}>
          <svg
            width="27"
            height="17"
            viewBox="0 0 27 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_79_5736)">
              <path
                d="M18.5707 11.8809C18.5184 11.7404 13.8758 2.50221 13.806 2.36171C13.5617 1.76456 13.1254 1.25523 12.5494 0.903966C11.1008 0.0609365 9.25076 0.552704 8.41301 2.01044C7.83706 3.01154 7.87197 4.18827 8.43047 5.11911C8.48283 5.24206 12.9159 14.0939 13.0032 14.2344C13.0555 14.3749 13.1254 14.4978 13.1952 14.6383C13.4395 15.2355 13.8758 15.7448 14.4518 16.0961C15.9004 16.9391 17.7504 16.4649 18.5882 15.0071C19.1816 14.0061 19.1292 12.8118 18.5707 11.8809Z"
                fill="#0EF387"
              />
              <path
                d="M13.212 5.62843C13.7182 5.08397 14.0323 4.34632 14.0323 3.53842C14.0323 1.86992 12.6884 0.5 11.0129 0.5C9.98319 0.5 9.07563 1.00933 8.53458 1.79967C8.42986 1.90505 0.907563 11.2486 0.820297 11.3716C0.314156 11.916 0 12.6537 0 13.4616C0 15.1476 1.36134 16.5 3.01939 16.5C4.04913 16.5 4.95669 15.9907 5.49774 15.2003C5.60246 15.0774 13.1422 5.75137 13.212 5.62843Z"
                fill="#FAFAFA"
              />
              <path
                d="M26.1787 5.62843C26.6848 5.08397 26.999 4.34632 26.999 3.53842C26.999 1.85236 25.6376 0.5 23.9796 0.5C22.9499 0.5 22.0423 1.00933 21.5013 1.79967C21.3965 1.90505 13.8568 11.2486 13.7695 11.3716C13.2634 11.916 12.9492 12.6537 12.9492 13.4616C12.9492 15.1476 14.3106 16.5 15.9686 16.5C16.9983 16.5 17.9059 15.9907 18.447 15.2003C18.5691 15.0774 26.0914 5.75137 26.1787 5.62843Z"
                fill="#FAFAFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_79_5736">
                <rect
                  width="27"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className={headerStyles.logoText}>ExpenseTracker</p>
        </div>

        <button onClick={toggleMenu}>
          {' '}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 12.75H31.5M4.5 23.25H31.5"
              stroke="#FAFAFA"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className={headerStyles.mobileMenu}>
            <DropDownMenu />
            <button className={headerStyles.closeBtn} onClick={toggleMenu}>
              Close
            </button>
            <div className={headerStyles.buttonWrapper}>
              <button
                className={`${headerStyles.mobileNavBtn} ${headerStyles.mobileNavBtnExp}`}
              >
                All Expense
              </button>
              <button
                className={`${headerStyles.mobileNavBtn} ${headerStyles.mobileNavBtnInc}`}
              >
                All Income
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
