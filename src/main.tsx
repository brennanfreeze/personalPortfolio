import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './pages/WrappedApp';
import './styles/Home.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
