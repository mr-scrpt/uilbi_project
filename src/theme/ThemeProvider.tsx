import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_KEY, ThemeContext } from "./ThemeContext"
import { ThemeEnum } from "./type";

const themeDefault = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeEnum || ThemeEnum.LIGHT


export const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<ThemeEnum>(themeDefault)


    const defaultProps = useMemo(() => ({
      theme: theme,
      setTheme
    }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}
