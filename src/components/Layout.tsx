import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatWidget } from './ChatWidget';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`bg-brand-black text-brand-white font-sans selection:bg-brand-yellow selection:text-brand-black ${isHome ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <Navbar />
      <Outlet />
      {!isHome && <Footer />}
      <ChatWidget />
    </div>
  );
};
