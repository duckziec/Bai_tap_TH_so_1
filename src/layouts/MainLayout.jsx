import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppFooter from '../components/layout/AppFooter';
import AppHeader from '../components/layout/AppHeader';

function MainLayout({ theme, onToggleTheme, themeLabel }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page">
      <AppHeader theme={theme} onToggleTheme={onToggleTheme} themeLabel={themeLabel} />

      <main className="main-content">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}

export default MainLayout;
