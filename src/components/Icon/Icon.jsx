import { Svg } from './Svg';

/*

To use this component you need to pass the following optional props:
- name
- className
- size

Example:
<Icon name="arrow-up" className={s.icon} size="20" />

------------------------------------------------------------------------------------------
List of icons names ("name" - description (css styles) ):
------------------------------------------------------------------------------------------
0) Logo is the default value (if you do not pass props "name")!
1) 'arrow-up' - Total income icon (add style: fill="color")
2) 'arrow-down' - Total expense icon (add style: fill="color")
3) 'chevron-up' - Arrow-up in header UserBarBtn (add styles: stroke="color", fill="none")
4) 'chevron-down' - Arrow-down in header UserBarBtn (add styles: stroke="color", fill="none")
5) 'burger-menu' - Burger-menu (add style in css: stroke="color")
6) 'user-logo' - Icon instead user avatar, default user-logo (add style: fill="color")
7) 'user' - Icon user for header profile settings (add styles: stroke="color", fill="none")
8) 'log-out' - Icon for button log-out (add styles: stroke="color", fill="none")
9) 'calendar' - Date input icon (add styles: stroke="color", fill="none")
10) 'clock' - Time input icon (add style in css: stroke="color", fill="none")
11) 'search' - Search input icon (add styles: stroke="color", fill="none")
12) 'check' - Selected category icon (add styles: stroke="color", fill="none")
13) 'edit' -Edit button icon (add styles: stroke="color", fill="none")
14) 'x-mark' - Close modal button icon (add style: stroke="color")
15) 'trash-bin' - Icon for delete transaction (add styles: stroke="color", fill="none")
16) 'eye' - Visible password icon (add styles: stroke="color", fill="none")
17) 'eye-off' - Hidden password icon (add styles: stroke="color", fill="none")
18) 'error' - Icon for unvalid form field (add style: fill="color")
19) 'success' - Icon for valid form field (add style in css: fill="color")
20) 'close-btn' - Icon for close burger-menu (add style: fill="color")

*/

export const Icon = ({ name, className, size }) => {
  switch (name) {
    // 1) Total income icon (add style: fill="color")
    case 'arrow-up':
      return (
        <Svg className={className} size={size}>
          <path d="M25.905 1.613c-0.149-1.029-1.104-1.742-2.133-1.593l-16.766 2.428c-1.029 0.149-1.742 1.104-1.593 2.133s1.104 1.742 2.133 1.593l14.903-2.159 2.159 14.903c0.149 1.029 1.104 1.742 2.133 1.593s1.742-1.104 1.593-2.133l-2.428-16.766zM5.273 30.154l20.277-27.145-3.016-2.253-20.277 27.145 3.016 2.253z"></path>
        </Svg>
      );

    // 2) Total expense icon (add style: fill="color")
    case 'arrow-down':
      return (
        <Svg className={className} size={size}>
          <path d="M4.201 29.5c0.13 1.097 1.124 1.881 2.221 1.751l17.876-2.113c1.097-0.13 1.881-1.124 1.751-2.221s-1.124-1.881-2.221-1.751l-15.889 1.878-1.878-15.889c-0.13-1.097-1.124-1.881-2.221-1.751s-1.881 1.124-1.751 2.221l2.113 17.876zM26.125 0.753l-21.508 27.274 3.141 2.477 21.508-27.274-3.141-2.477z"></path>
        </Svg>
      );

    // 3) Arrow-up in header UserBarBtn (add styles: stroke="color", fill="none")
    case 'chevron-up':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M8 20l8-8 8 8"
          ></path>
        </Svg>
      );

    // 4) Arrow-down in header UserBarBtn(add styles: stroke="color", fill="none")
    case 'chevron-down':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M8 12l8 8 8-8"
          ></path>
        </Svg>
      );

    // 5) Burger-menu (add style: stroke="color")
    case 'burger-menu':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M4 11.333h24M4 20.667h24"
          ></path>
        </Svg>
      );

    // 6) Icon instead user avatar, default user-logo (add style: fill="color")
    case 'user-logo':
      return (
        <Svg className={className} size={size}>
          <path d="M29.298 26.25c-1.714-3.008-4.39-5.352-7.597-6.654 1.595-1.196 2.773-2.864 3.368-4.767s0.575-3.945-0.055-5.837c-0.63-1.892-1.84-3.537-3.458-4.703s-3.561-1.793-5.555-1.793c-1.994 0-3.937 0.627-5.555 1.793s-2.827 2.811-3.458 4.703c-0.631 1.892-0.65 3.934-0.055 5.837s1.773 3.571 3.368 4.767c-3.208 1.302-5.884 3.646-7.598 6.654-0.106 0.171-0.177 0.361-0.208 0.56s-0.022 0.402 0.027 0.597c0.049 0.195 0.136 0.378 0.257 0.539s0.273 0.295 0.447 0.396c0.174 0.101 0.367 0.165 0.566 0.19s0.402 0.009 0.595-0.046c0.193-0.055 0.374-0.149 0.53-0.275s0.286-0.283 0.381-0.46c2.265-3.915 6.265-6.25 10.701-6.25s8.436 2.336 10.701 6.25c0.206 0.331 0.532 0.568 0.909 0.663s0.778 0.038 1.115-0.156c0.337-0.195 0.585-0.513 0.692-0.887s0.064-0.776-0.12-1.119zM9.5 12c0-1.286 0.381-2.542 1.095-3.611s1.729-1.902 2.917-2.394 2.495-0.621 3.756-0.37c1.261 0.251 2.419 0.87 3.328 1.779s1.528 2.067 1.779 3.328c0.251 1.261 0.122 2.568-0.37 3.756s-1.325 2.203-2.394 2.917c-1.069 0.714-2.326 1.095-3.611 1.095-1.723-0.002-3.375-0.687-4.594-1.906s-1.904-2.871-1.906-4.594z"></path>
        </Svg>
      );

    // 7) Icon user for header profile settings (add styles: stroke="color", fill="none")
    case 'user':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6"
            d="M26.667 28v-2.667c0-1.415-0.562-2.771-1.562-3.771s-2.357-1.562-3.771-1.562h-10.667c-1.415 0-2.771 0.562-3.771 1.562s-1.562 2.357-1.562 3.771v2.667"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6"
            d="M15.999 14.667c2.946 0 5.333-2.388 5.333-5.333s-2.388-5.333-5.333-5.333c-2.945 0-5.333 2.388-5.333 5.333s2.388 5.333 5.333 5.333z"
          ></path>
        </Svg>
      );

    // 8) Icon for button log-out (add styles: stroke="color", fill="none")
    case 'log-out':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4471"
            d="M12.235 27.294h-5.020c-0.666 0-1.304-0.264-1.775-0.735s-0.735-1.109-0.735-1.775v-17.569c0-0.666 0.264-1.304 0.735-1.775s1.109-0.735 1.775-0.735h5.020"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4471"
            d="M21.020 22.275l6.274-6.275-6.274-6.274"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4471"
            d="M27.294 16h-15.059"
          ></path>
        </Svg>
      );

    // 9) Date input icon (add styles: stroke="color", fill="none")
    case 'calendar':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M25.333 5.333h-18.667c-1.473 0-2.667 1.194-2.667 2.667v18.667c0 1.473 1.194 2.667 2.667 2.667h18.667c1.473 0 2.667-1.194 2.667-2.667v-18.667c0-1.473-1.194-2.667-2.667-2.667z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M21.333 2.667v5.333"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M10.667 2.667v5.333"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M4 13.333h24"
          ></path>
        </Svg>
      );

    // 10) Time input icon (add styles: stroke="color", fill="none")
    case 'clock':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333s-5.969-13.333-13.333-13.333c-7.364 0-13.333 5.97-13.333 13.333s5.97 13.333 13.333 13.333z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M16 8v8l5.333 2.667"
          ></path>
        </Svg>
      );

    // 11) Search input icon (add styles: stroke="color", fill="none")
    case 'search':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M14.667 25.333c5.891 0 10.667-4.776 10.667-10.667s-4.776-10.667-10.667-10.667c-5.891 0-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M28 28l-5.8-5.8"
          ></path>
        </Svg>
      );

    // 12) Selected category icon (add styles: stroke="color", fill="none")
    case 'check':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M26.667 8l-14.667 14.667-6.667-6.667"
          ></path>
        </Svg>
      );

    // 13) Edit button icon (add styles: stroke="color", fill="none")
    case 'edit':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M22.667 4c0.35-0.35 0.766-0.628 1.224-0.817s0.948-0.287 1.443-0.287c0.495 0 0.986 0.098 1.443 0.287s0.873 0.467 1.223 0.817 0.628 0.766 0.818 1.223c0.189 0.458 0.287 0.948 0.287 1.443s-0.098 0.986-0.287 1.443c-0.19 0.458-0.467 0.873-0.818 1.223l-18 18-7.333 2 2-7.333 18-18z"
          ></path>
        </Svg>
      );

    // 14) Close modal button icon (add style: stroke="color")
    case 'x-mark':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M24 8l-16 16"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M8 8l16 16"
          ></path>
        </Svg>
      );

    // 15) Icon for delete transaction (add styles: stroke="color", fill="none")
    case 'trash-bin':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M4 8h24"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M25.333 8v18.667c0 0.707-0.281 1.385-0.781 1.886s-1.178 0.781-1.886 0.781h-13.333c-0.707 0-1.386-0.281-1.886-0.781s-0.781-1.178-0.781-1.886v-18.667M10.667 8v-2.667c0-0.707 0.281-1.386 0.781-1.886s1.178-0.781 1.886-0.781h5.333c0.707 0 1.386 0.281 1.886 0.781s0.781 1.178 0.781 1.886v2.667"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M13.333 14.667v8"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3"
            d="M18.667 14.667v8"
          ></path>
        </Svg>
      );

    // 16) Visible password icon (add styles: stroke="color", fill="none")
    case 'eye':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M1.333 16c0 0 5.333-10.667 14.667-10.667s14.667 10.667 14.667 10.667-5.333 10.667-14.667 10.667c-9.333 0-14.667-10.667-14.667-10.667z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
          ></path>
        </Svg>
      );

    // 17) Hidden password icon (add styles: stroke="color", fill="none")
    case 'eye-off':
      return (
        <Svg className={className} size={size}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M23.92 23.92c-2.279 1.737-5.055 2.7-7.92 2.747-9.333 0-14.667-10.667-14.667-10.667 1.659-3.091 3.959-5.791 6.747-7.92M13.2 5.653c0.918-0.215 1.857-0.322 2.8-0.32 9.333 0 14.667 10.667 14.667 10.667-0.809 1.514-1.775 2.94-2.88 4.253M18.827 18.827c-0.366 0.393-0.808 0.708-1.299 0.927s-1.020 0.336-1.557 0.346c-0.537 0.009-1.071-0.089-1.569-0.291s-0.95-0.501-1.33-0.88c-0.38-0.38-0.679-0.832-0.88-1.33s-0.3-1.032-0.29-1.569c0.009-0.537 0.127-1.067 0.346-1.558s0.534-0.932 0.927-1.298"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M1.333 1.333l29.333 29.333"
          ></path>
        </Svg>
      );

    // 18) Icon for unvalid form field (add style: fill="color")
    case 'error':
      return (
        <Svg className={className} size={size}>
          <path d="M0 16c0-8.838 7.162-16 16-16s16 7.162 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM10.938 13.006l2.944 2.938-2.944 2.994c-0.581 0.588-0.581 1.538 0 2.069 0.588 0.637 1.537 0.637 2.069 0l2.938-2.888 2.994 2.888c0.588 0.637 1.538 0.637 2.069 0 0.637-0.531 0.637-1.481 0-2.069l-2.888-2.994 2.888-2.938c0.637-0.531 0.637-1.481 0-2.069-0.531-0.581-1.481-0.581-2.069 0l-2.994 2.944-2.938-2.944c-0.531-0.581-1.481-0.581-2.069 0-0.581 0.588-0.581 1.537 0 2.069z"></path>
        </Svg>
      );

    // 19) Icon for valid form field (add style: fill="color")
    case 'success':
      return (
        <Svg className={className} size={size}>
          <path d="M0 16c0-8.838 7.162-16 16-16s16 7.162 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM23.237 13.238c0.681-0.681 0.681-1.794 0-2.475s-1.794-0.681-2.475 0l-6.763 6.762-2.763-2.762c-0.681-0.681-1.794-0.681-2.475 0s-0.681 1.794 0 2.475l4 4c0.681 0.681 1.794 0.681 2.475 0l8-8z"></path>
        </Svg>
      );

    // 20) Icon for close burger-menu (add style: fill="color")
    case 'close-btn':
      return (
        <Svg className={className} size={size}>
          <path d="M4.323 31.069l-4.323-4.5 11.177-10.735-10.735-11.177 4.253-4.085 10.735 11.177 10.88-10.45 4.323 4.5-10.88 10.45 10.735 11.177-4.253 4.085-10.735-11.177-11.177 10.735z"></path>
        </Svg>
      );

    // 0) Site logo as default value (without props "name")
    default:
      return (
        <svg
          className={className}
          width="27"
          height="16"
          viewBox="0 0 27 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.57 11.3809C18.5176 11.2404 13.8751 2.00221 13.8053 1.86171C13.561 1.26456 13.1246 0.755229 12.5487 0.403966C11.1001 -0.439063 9.25003 0.0527039 8.41228 1.51044C7.83633 2.51154 7.87123 3.68827 8.42973 4.61911C8.48209 4.74206 12.9152 13.5939 13.0025 13.7344C13.0548 13.8749 13.1246 13.9978 13.1944 14.1383C13.4388 14.7355 13.8751 15.2448 14.4511 15.5961C15.8997 16.4391 17.7497 15.9649 18.5875 14.5071C19.1809 13.5061 19.1285 12.3118 18.57 11.3809Z"
            fill="#0EF387"
          />
          <path
            d="M13.212 5.12843C13.7182 4.58397 14.0323 3.84632 14.0323 3.03842C14.0323 1.36992 12.6884 0 11.0129 0C9.98319 0 9.07563 0.50933 8.53458 1.29967C8.42986 1.40505 0.907563 10.7486 0.820297 10.8716C0.314156 11.416 0 12.1537 0 12.9616C0 14.6476 1.36134 16 3.01939 16C4.04913 16 4.95669 15.4907 5.49774 14.7003C5.60246 14.5774 13.1422 5.25137 13.212 5.12843Z"
            fill="#FAFAFA"
          />
          <path
            d="M26.1794 5.12843C26.6856 4.58397 26.9997 3.84632 26.9997 3.03842C26.9997 1.35236 25.6384 0 23.9803 0C22.9506 0 22.043 0.50933 21.502 1.29967C21.3973 1.40505 13.8575 10.7486 13.7702 10.8716C13.2641 11.416 12.95 12.1537 12.95 12.9616C12.95 14.6476 14.3113 16 15.9693 16C16.9991 16 17.9066 15.4907 18.4477 14.7003C18.5699 14.5774 26.0922 5.25137 26.1794 5.12843Z"
            fill="#FAFAFA"
          />
        </svg>
      );
  }
};
