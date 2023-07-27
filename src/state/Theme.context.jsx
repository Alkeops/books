import { createContext, useContext } from "react";
//Value por defecto createContext([]) <- []
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }} displayName="ThemeContext">
      {children}
    </ThemeContext.Provider>
  );
};
