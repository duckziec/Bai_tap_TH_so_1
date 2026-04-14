import { Link, NavLink } from 'react-router-dom';
import { MAIN_NAV_ITEMS } from '../../constants/navigation';
import { ROUTE_PATHS } from '../../constants/routes';

function AppHeader({ theme, onToggleTheme, themeLabel }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-left">
          <div className="logo-block logo-compact">
            <Link className="logo-button logo-icon-btn" to={ROUTE_PATHS.HOME} aria-label="Về trang chủ">
              <img className="logo-img" src="/image.png" alt="PVHub logo" />
            </Link>
            <Link className="logo-button logo-name" to={ROUTE_PATHS.WELCOME} aria-label="Về trang mở đầu">
              PVHub
            </Link>
          </div>
        </div>

        <nav className="nav-center" aria-label="Điều hướng chính">
          {MAIN_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'dark' ? (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5L19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5L19 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span className="sr-only">{themeLabel}</span>
          </button>

          <Link className="btn btn-outline btn-sm" to={ROUTE_PATHS.ABOUT_US}>
            Đăng nhập
          </Link>
          <Link className="btn btn-primary btn-sm" to={ROUTE_PATHS.CONTACT}>
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
