# GET STARTED 

Hello! Thank you for reviewing my technical assessment! 

Techstack: 

- Base Framework: `Vite` + `React` + `Typescript`
- API: `Axios`
- Page Routing: `React-Router v7` (not required, but included for when project decides to expand from a single page application)
-Theme / Mobile view switching: `React ES6 useContext` 
- Git: https://git-fork.com/

File directory: 

- `src > main` - createRoot is called here
- `src > App.tsx` -  Context Providers for Theme and Mobile View  is called here, implements <ThemeToggle/> and <WeatherApp/> components 
- `src > App.css` - Main css file for all components
- `src > context` -   MobileViewContext and ThemeContext are stored here. 
- `src > component` - ThemeToggle, WeatherApp components stored here
- `src > component > weather-app` WeatherApp's child component <Searchbar/>, <Weather/> , <SearchHistory> is stored here. 
- `src > data` - Mock data for the OpenWeather api call is stored here
- `src > utils > utils.tsx` - Various utility functions such as string formatter and UTC string to date time converter, are stored here.   
- `src > assets` png is stored here 

## RUNNING THE APP 

`npm install`

`npm run dev`

# ASSUMPTIONS 

There is a bit of mismatch between the original mockup and the Figma mockup, so I will assume that whatever function is available in the original mockup, has to also appear in the Figma design:

## Searchbar: 

- The city and country fields will be kept as two separate input fields.
- The search bar will have both "search" and "clear fields" buttons.
- Error will be displayed when users hit the "search" button and:
  - both fields are empty 
  - no City, Country record is found in OpenWeather's geocaching api.
  - no Weather is found for the OpenWeather's weather api. 

## Weather:

- Weather's current temperature and max/min temperature will be rounded up to the nearest digit to match the Figma design
- Weather temperature will be returned in Celsius format to match Figma design.
- Timestamp will be in (dd-mm-yyyy, hh:mm:ss am/pm) format to match the original mockup. 
- Since there is no empty design provided, we will assume that there is no empty state. 
  When the users first loads the page, the weather will be prefilled (in a production environment, this could be calculated with the user's gps location or with the user's past search results)
  (but the code will not break if the weather is an empty object)
- Weather will show sun.png in place of icons ["01d", "02d", "10d"] in this openweather list: https://openweathermap.org/weather-conditions#How-to-get-icon-URL , for other icons cloud.png will be shown. 

## Search History

- Clicking on "search" on an old record will create a new record at the top of the history list.
- Timestamp format will be in the same format as the one shown in the <Weather/> component. 

## CSS 

- We assume there's only 2 state: 
  window.innerWidth <= 700px ? Mobile view : Desktop view

- Where possible we would use the css `@media` query rule to change the appearance of the components when switching between Desktop and Mobile view 

- Unless the component is drastically different like the <Weather/> component have 2 columns versus one column in mobile view then we will use MobileViewContext to load in a different component. 

- CSS will use `px` instead of `rem` untis to follow the figma requirements 

# PREVIEW

![localhost_5173_ (1)](https://github.com/user-attachments/assets/593d87f3-6ba3-417a-ae94-6dfbd474da72)
![localhost_5173_ (2)](https://github.com/user-attachments/assets/01588a62-6503-4a90-b13d-731581404bbf)
![localhost_5173_(iPhone 12 Pro)](https://github.com/user-attachments/assets/00863316-6186-4fbe-a5fc-346d71428ce7)
![localhost_5173_(iPhone 12 Pro) (2)](https://github.com/user-attachments/assets/33f5af91-f64d-4751-9c13-3550223160f1)

# IMPROVEMENTS

- Could break the app.css file into smaller files. 

- Could introduce emotionCss / js in css to handle dynamic css changes more neatly.

- Could store the colour scheme and font sizes in a stylesheet and use SCSS / SASS / EmotionCss to reference the stylesheet, makes its easier to change colorscheme without much refactoring. 
