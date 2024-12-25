import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(false)

    const handleTheme = () => {
        setTheme(!theme)
    }
    
    const toggleTheme = theme ? "dark" : "light"
    const data = [toggleTheme, handleTheme]

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;