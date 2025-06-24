import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import searchIcon from "../../assets/search.png";
import deleteIcon from "../../assets/delete.png";
import { MobileViewContext } from "../../MobileViewContext";

export default function SearchHistory ({ history, onSubmit, handleDelete } : { history: string[][], onSubmit: (city: string, country: string) => Promise<boolean>, handleDelete: (index: number) => () => void }) {
    const {theme} = useContext(ThemeContext);
    const mobileView = useContext(MobileViewContext);

    return (
        <div className={`${theme} card cardHistory`}>
            <span className="title">
                Search History
            </span>
            { history.length > 0 
            ? <>
                {history.map(([city,country,timestamp], index) => (
                    <div className={`${theme} historyRow`} key={`${city}-${country}-${index}`}>
                        { mobileView 
                        ? <>
                            <span className="column"> 
                                <span>
                                    {city}, {country}
                                </span>
                                <span className="timestamp">
                                    {timestamp}
                                </span>
                            </span>
                            <span>
                                <button
                                        className={`${theme} historyButton`}
                                        onClick={()=>onSubmit(city,country)}
                                    >
                                        <img src={searchIcon} />
                                    </button>
                                    <button
                                        className={`${theme} historyButton`}
                                        onClick={handleDelete(index)}
                                    >
                                        <img src={deleteIcon} />
                                    </button>
                            </span>
                        </>
                        : 
                        <>
                            <span>
                                {city}, {country}
                            </span>
                            <span>
                                <span className="timestamp">
                                    {timestamp}
                                </span>
                                <button
                                    className={`${theme} historyButton`}
                                    onClick={()=>onSubmit(city,country)}
                                >
                                    <img src={searchIcon} />
                                </button>
                                <button
                                    className={`${theme} historyButton`}
                                    onClick={handleDelete(index)}
                                >
                                    <img src={deleteIcon} />
                                </button>
                            </span>
                        </>
                        } 
                    </div>
                ))}
            </>
            : <div className="noRecord"> No Record </div>
            }
        </div>
    );
}