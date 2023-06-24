/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

import NotFound from './NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const WrappedApp = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

export default WrappedApp;
