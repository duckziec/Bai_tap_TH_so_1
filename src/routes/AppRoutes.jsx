import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants/routes';
import { useTheme } from '../hooks/useTheme';
import MainLayout from '../layouts/MainLayout';
import {
  AboutUsPage,
  CategoriesPage,
  ContactPage,
  CoursesPage,
  HomePage,
  StatsPage,
  TestimonialsPage,
  WelcomePage,
} from '../pages';

function AppRoutes() {
  const { theme, toggleTheme, themeLabel } = useTheme();

  return (
    <Routes>
      <Route element={<MainLayout theme={theme} onToggleTheme={toggleTheme} themeLabel={themeLabel} />}>
        <Route path={ROUTE_PATHS.WELCOME} element={<WelcomePage />} />
        <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
        <Route path={ROUTE_PATHS.ABOUT_US} element={<AboutUsPage />} />
        <Route path={ROUTE_PATHS.CATEGORIES} element={<CategoriesPage />} />
        <Route path={ROUTE_PATHS.COURSES} element={<CoursesPage />} />
        <Route path={ROUTE_PATHS.STATS} element={<StatsPage />} />
        <Route path={ROUTE_PATHS.TESTIMONIALS} element={<TestimonialsPage />} />
        <Route path={ROUTE_PATHS.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<Navigate to={ROUTE_PATHS.WELCOME} replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
