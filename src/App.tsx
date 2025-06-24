import './App.css'
import WeatherApp from './components/weather-app'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeToggle from './components/theme-toggle'
import { MobileViewContextProvider } from './context/MobileViewContext'

function App() {
  return (
    <MobileViewContextProvider>
      <ThemeContextProvider>
          <ThemeToggle>
            <WeatherApp/>
          </ThemeToggle>
      </ThemeContextProvider>
    </MobileViewContextProvider>
  )
}

export default App
