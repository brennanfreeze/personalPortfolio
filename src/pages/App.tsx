// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
