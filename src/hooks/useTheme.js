import { useEffect, useMemo, useState } from 'react';

const THEME_KEY = 'pvhub-theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return LIGHT_THEME;
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);
  if (savedTheme === LIGHT_THEME || savedTheme === DARK_THEME) {
    return savedTheme;
  }

  return LIGHT_THEME;
};

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  const themeLabel = useMemo(() => {
    const nextTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    return `Chuyển sang chế độ ${nextTheme === DARK_THEME ? 'tối' : 'sáng'}`;
  }, [theme]);

  return {
    theme,
    toggleTheme,
    themeLabel,
  };
}
