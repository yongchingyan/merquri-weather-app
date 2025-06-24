import './App.css'
import WeatherApp from './components/weather-app'
import { ThemeContextProvider } from './ThemeContext'
import ThemeToggle from './components/theme-toggle'

function App() {
  return (
    <ThemeContextProvider>
        <ThemeToggle>
          <WeatherApp/>
        </ThemeToggle>
    </ThemeContextProvider>
  )
}

export default App
