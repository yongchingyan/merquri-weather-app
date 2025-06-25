import { useState } from "react"
import Searchbar from "./weather-app/searchbar";
import axios from 'axios';
import { MOCK_COMBINED_WEATHER_API } from "../data/mock-data";
import Weather from "./weather-app/weather";
import SearchHistory from "./weather-app/search-history";
import { formatCity, formatCountry, UTCtoDateTime } from "../utils/utils";

const MOCK_DATA = MOCK_COMBINED_WEATHER_API;             

export default function WeatherApp () {
    const [history, setHistory] = useState<string[][]>([]);
    const [error,setError] = useState("");
    const [weather, setWeather] = useState<typeof MOCK_COMBINED_WEATHER_API>(MOCK_DATA);

    const onSubmit = async (city: string, country: string) => {
        // console.log(`Searching for... ${city}, ${country}`)
        if (!city || !country){
            setError("Please fill in both fields.");
            return false;
        }
            
        return axios.get("http://api.openweathermap.org/geo/1.0/direct", {
            params: {
            q: `${city},,${country}`,
            limit: 1, 
            appid: "665d59d99575ff90304a8d766a9a8527"
            }
        })
        .then(function (response) {
            // console.log(response.data);
            if (response.data.length>0){

                return axios.get("https://api.openweathermap.org/data/3.0/onecall", {
                    params: {
                    lat: response.data[0].lat,
                    lon: response.data[0].lon,
                    exclude: "hourly,minutely",
                    units: "metric",
                    appid: "665d59d99575ff90304a8d766a9a8527"
                    }
                })
                .then(function (response1) {
                    // console.log(response1.data);
                    if (response1.data){
                        const timestamp = UTCtoDateTime(response1.data.current.dt);

                        setWeather({city: formatCity(city), country: formatCountry(country), timestamp, ...response1.data})
                        // console.log(`Saving weather.... `, {city: formatCity(city), country: formatCountry(country), ...response1.data})
                        setHistory([
                            [
                                formatCity(city), 
                                formatCountry(country),
                                timestamp
                            ],
                            ...history
                        ]);
                        return true;
                    }
                    else {
                        setError("Not Found");
                        return false;
                    }
                })
                .catch(function (error) {
                    setError(error.message);
                    return false;
                })
            }
            else {
                setError("Not Found");
                return false;
            }
        })
        .catch(function (error) {
            setError(error.message);
            return false;
        })
    }

    const handleDelete = (index: number) => () => {
        const newHistory = [...history].filter((_,key) => key!=index)
        setHistory(newHistory);
    }

    return (
        <div>
            <Searchbar error={error} setError={setError} onSubmit={onSubmit} />
            <Weather weather={weather}>
                <SearchHistory history={history} onSubmit={onSubmit} handleDelete={handleDelete}/> 
            </Weather>
        </div>
    )
}