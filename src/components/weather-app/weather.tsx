import { useContext } from "react";
import type { MOCK_COMBINED_WEATHER_API } from "../mock-data";
import { ThemeContext } from "../../context/ThemeContext";
import sunIcon from "../../assets/sun.png";
import cloudIcon from "../../assets/cloud.png";
import { MobileViewContext } from "../../context/MobileViewContext";

const SUN_COND = ["01d", "02d", "10d"];

export default function Weather ({weather, children}: {weather: typeof MOCK_COMBINED_WEATHER_API, children: React.ReactNode}) {
    const {theme} = useContext(ThemeContext);
    const mobileView = useContext(MobileViewContext);

    return (
        <div className={`${theme} card`}>
            { weather &&
                <div className={`${theme} weatherWrapper`}> 
                    { mobileView 
                    ? <span className="row">
                        <span className="column">
                            <span className={"title"}>Today's Weather</span>
                            <span className={theme} id="currentTemp">{weather.current.temp}°</span>
                            <span className={"title"}>H: {weather.daily[0].temp.max}° L: {weather.daily[0].temp.min}°</span>
                            <span className={theme} id="place">{weather.city}, {weather.country}</span>
                        </span>
                        <span className="column mobileDetailsWrapper">
                            <span className={`${theme} details`}>{weather.current.weather[0].main}</span>
                            <span className={`${theme} details`}>Humidity: {weather.current.humidity}%</span>
                            <span className={`${theme} details`}>{weather.timestamp}</span>
                        </span>
                    </span>
                    : <>
                        <span className={"title"}>Today's Weather</span>
                        <span className={theme} id="currentTemp">{weather.current.temp}°</span>
                        <span className={"title"}>H: {weather.daily[0].temp.max}° L: {weather.daily[0].temp.min}°</span>
                        <span className="row desktopDetailsWrapper">
                            <span className={theme} id="place">{weather.city}, {weather.country}</span>
                            <span className={`${theme} details`}>{weather.timestamp}</span>
                            <span className={`${theme} details`}>Humidity: {weather.current.humidity}%</span>
                            <span className={`${theme} details`}>{weather.current.weather[0].main}</span>
                        </span>
                    </>
                    }
                    {   
                        SUN_COND.indexOf(weather.current.weather[0].icon) == -1 
                        ? <img src={cloudIcon} alt="cloud"/>
                        : <img src={sunIcon} alt="sun"/>
                        
                    }
                </div>
            }
            {children}
        </div>
    )
}