import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
// eslint-disable-next-line import/no-named-as-default
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
