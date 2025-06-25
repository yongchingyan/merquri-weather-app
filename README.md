# GET STARTED 

Techstack: 

Base Framework: `Vite` + `React` + `Typescript`
API: `Axios`
Page Routing: `React-Router v7` (not required, but included for when project decides to expand from a single page application)
Handling theme switching: `React ES6 useContext` 

File directory: 

`src > main` - createRoot is called here
`src > App.tsx` -  Context Providers for Theme and Mobile View  is called here, implements <ThemeToggle/> and <WeatherApp/> components 
`src > App.css` - Main css file for all components
`src > context` -   MobileViewContext and ThemeContext is stored here. 
`src > component` - ThemeToggle, WeatherApp components stored here
`src > component > weather-app` WeatherApp's child component <Searchbar/>, <Weather/> , <SearchHistory> is stored here. 
`src > data` - Mock data for OpenWeather api call is stored here
`src > utils > utils.tsx` - Various utility function such as string formatter and utc string to date time converter is stored here.   
`src > assets` png is stored here 

## RUNNING THE APP 

`npm install`

`npm run dev`

# ASSUMPTIONS 

There is a bit of mismatch between the orginal mockup and the figma mockup, so I will assume that whatever function that is available in the original mockup, has to also appear in the figma design:

## Searchbar: 

- The city and country fields will be kept as two separate input fields.
- The search bar will have both the "search" and "clear fields" button.
- Error will be displayed when users hit "search" buttons and:
  - both fields are empty 
  - no City, Country record is found in OpenWeather's geocaching api.
  - no Weather is found for the OpenWeather's weather api. 

## Weather:

- Weather's current temperature and max/min temp will be rounded up to the nearest digit to match the figma design
- Weather temperature will be returned in celcius format to match figma design.
- Timestamp will be in (dd-mm-yyyy, hh:mm:ss am/pm) format to match the original mockup. 
- Since there is no empty design provided, we will assume that there is no a empty state. 
  When the users first loads the page, the weather will be prefilled (in a production environment, this could be calculated with the user's gps location or with the user's past search results)
  (but the code will not break if the weather is an empty object)
- Weather will show sun.png in place of icons ["01d", "02d", "10d"] in this openweather list: https://openweathermap.org/weather-conditions#How-to-get-icon-URL , for other icons cloud.png will be shown. 

## Search History

- Clicking on "search" on a old record will create a new record at the top of the history list.
- Timestamp format will be in the same format as the one shown in the <Weather/> component. 

## CSS 

- We assume there's only 2 state: 
  window.innerWidth <= 700px ? Mobile view : Desktop view

- Where possible we would use the css @media query rule to change the appearance of the components when switching between Desktop and Mobile view 

- Unless the component is drastically different like Weather component have 2 columns versus one column in mobile view then we will use MobileViewContext to load in a different html component. 

# PREVIEW

# IMPROVEMENTS

- Could break the app.css file into smaller files. 

- Could introduce emotionCss / js in css to handle dynamic css changes more neatly.

- Could store the colour scheme and font sizes in a stylesheet and use SCSS / SASS / EmotionCss to reference the stylesheet, makes its easier to change colorscheme without much refactoring. 