import { createContext, useContext } from "react";
//Value por defecto createContext([]) <- []
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

  const toggleTheme = () => {//...logica 
  }

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme }} displayName="ThemeContext">
      {children}
    </ThemeContext.Provider>
  );
};
