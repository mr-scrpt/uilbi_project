import { createContext } from 'react';
import { ThemeContextInterface } from '../type';

export const ThemeContext = createContext<ThemeContextInterface>({});

export const LOCAL_STORAGE_KEY = 'theme';
