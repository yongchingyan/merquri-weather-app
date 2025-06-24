import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import searchIcon from "../../assets/search.png";
import deleteIcon from "../../assets/delete.png";

export default function Searchbar ({
    error, setError, onSubmit  
} : { 
    error: string, 
    setError: (error: string)=>void
    onSubmit: (city: string, country: string) => Promise<boolean>
}) {

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const {theme} = useContext(ThemeContext);

    const handleSubmit = async () => {
        const res = await onSubmit(city, country)

        if (res) {
            handleClear()
        }
    }

    const handleClear = () => {
        setCity("");
        setCountry("");
        setError("");
    }

    return (
        <>
        <div className={`searchbarContainer`}> 
            <div className={`${theme} searchbarField`}>
                <input type="text" value={city} onChange={(e)=>{
                    setError("");
                    setCity(e.target.value)
                }}/>
                <label>City</label>
            </div>
            <div className={`${theme} searchbarField`}>
                <input type="text" value={country} onChange={(e)=>{
                    setError("");
                    setCountry(e.target.value)
                }}/>
                <label>Country</label>
            </div>
            <div className={`searchbarButtonContainer`}>
                <button className={`${theme} searchbarButton`} onClick={handleSubmit}> 
                    <img src={searchIcon} /> 
                </button>
                <button className={`${theme} searchbarButton`} onClick={handleClear}> 
                    <img src={deleteIcon} /> 
                </button>
            </div>
        </div>
        {error && <div className={`${theme} error`}> {error}</div>}
        </>
    )
}