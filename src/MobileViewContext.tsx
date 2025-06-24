import { createContext, useEffect, useState } from 'react';

export const MobileViewContext = createContext(window.innerWidth <= 700);

export const MobileViewContextProvider = ({children}: {children: React.ReactNode}) => {
    const [mobileView, setMobileView] = useState(false);
    // very basic debouncer to prevent too many updates to mobile view
    const [throttle, setThrottle] = useState(false);

    const handleResize = () => {

        if (!throttle){
            setMobileView(window.innerWidth <= 700)
        
            setThrottle(true);
                setTimeout(function() {
                setThrottle(false);
            }, 250);
        }    
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize) 
    }, [])

    return (
        <MobileViewContext.Provider value={mobileView}>
            mobile {mobileView ? 'ye' : 'no'}
            {children}
        </MobileViewContext.Provider>
    )
    
}