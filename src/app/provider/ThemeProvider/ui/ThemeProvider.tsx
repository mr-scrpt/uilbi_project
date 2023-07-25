import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY, ThemeContext } from '../lib/ThemeContext';
import { ThemeEnum } from '../type';
import { ThemeProviderProps } from './type/props.type';

const themeDefault = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeEnum || ThemeEnum.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeEnum>(themeDefault);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
