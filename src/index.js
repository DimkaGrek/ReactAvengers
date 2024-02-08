import React from 'react';
import ReactDOM from 'react-dom/client';

import { App, ModalProvider } from 'components';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter basename="/ReactAvengers">
        <App />
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);
