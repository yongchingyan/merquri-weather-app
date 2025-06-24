import { createContext, useCallback, useEffect, useState } from 'react';

export const MobileViewContext = createContext(window.innerWidth <= 700);

export const MobileViewContextProvider = ({children}: {children: React.ReactNode}) => {
    const [mobileView, setMobileView] = useState(window.innerWidth <= 700);
    // very basic debouncer to prevent too many updates to mobile view
    const [throttle, setThrottle] = useState(false);

    const handleResize = useCallback (() => {

        if (!throttle){
            setMobileView(window.innerWidth <= 700)
        
            setThrottle(true);
                setTimeout(function() {
                setThrottle(false);
            }, 100);
        }    
    }, [throttle])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize) 
    }, [handleResize])

    return (
        <MobileViewContext.Provider value={mobileView}>
            mobile: {mobileView? "ye" : "nah"}
            {children}
        </MobileViewContext.Provider>
    )
    
}