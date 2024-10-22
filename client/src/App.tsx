import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Protected from './components/Protected';
import Public from './components/Public';
import useAuth from './hooks/useAuth';

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export function AppTest() {
  const { isLogin } = useAuth();

  return isLogin ? <Protected /> : <Public />;
}
