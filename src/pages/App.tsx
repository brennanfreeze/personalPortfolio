// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import NotFound from './NotFound';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp: React.FC = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
