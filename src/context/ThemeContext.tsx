import { createContext, useState } from 'react';

export const ThemeContext = createContext<{theme: "light"|"dark", toggleTheme: ()=>void}>({theme: "light", toggleTheme: ()=>{}});

export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<"light"|"dark">("light");

    const toggleTheme = () => {
        setTheme(theme==="light"? "dark": "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}