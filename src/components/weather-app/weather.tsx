import { useContext } from "react";
import type { MOCK_COMBINED_WEATHER_API } from "../mock-data";
import { ThemeContext } from "../../ThemeContext";
import sunIcon from "../../assets/sun.png";

export default function Weather ({weather, children}: {weather: typeof MOCK_COMBINED_WEATHER_API, children: React.ReactNode}) {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${theme} card`}>
            { weather &&
                <div className={`${theme} weatherWrapper`}>
                    <span className={"title"}>Today's Weather</span>
                    <span className={theme} id="currentTemp">{weather.current.temp}°</span>
                    <span className={"title"}>H: {weather.daily[0].temp.max}° L: {weather.daily[0].temp.min}°</span>
                    <span className="row">
                        <span className={theme} id="place">{weather.city}, {weather.country}</span>
                        <span className={`${theme} details`}>{weather.timestamp}</span>
                        <span className={`${theme} details`}>Humidity: {weather.current.humidity}</span>
                        <span className={`${theme} details`}>{weather.current.weather[0].main}</span>
                    </span>
                    <img src={sunIcon} alt="sun"/>
                </div>
            }
            {children}
        </div>
    )
}