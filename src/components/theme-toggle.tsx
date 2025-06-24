import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import bgDark from "../assets/bg-dark.png"
import bgLight from "../assets/bg-light.png"

export default function ThemeToggle({children} : {children: React.ReactNode}) {
    const {theme, toggleTheme} = useContext<{theme: "light"|"dark", toggleTheme: ()=>void}>(ThemeContext);

    useEffect(()=>{
        document.documentElement.style.background = `url(${theme === "light" ? bgLight : bgDark}) no-repeat center center fixed`
        document.documentElement.style.transition = "all 1s ease-out";
    },[theme])

    return (
        <div className={`${theme} container`}>
            <button className={`${theme} themeButton`} onClick={toggleTheme}> {theme === "light" ? "Light Mode" : "Dark Mode"} </button>
            {children}
        </div>
    )
    
}