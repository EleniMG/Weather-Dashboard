# Weather-Dashboard

## Description

My aim in creating the weather dashboard was to use an API to provide users with current and future weather information based on any location they search for. Users can search for a location by typing into the search box or by selecting any of the buttons below the search box, which are populated after a user enters a location in the search box. Under the search box, I have also added a 'Clear Searches' to allow the list of buttons of previously searched locations to be emptied.

When developing this dashboard, I realised the benefit and importance of making separate functions for individual aspects of the project. For example, I made individual functions for displaying the current weather data, the future weather data, and adding the searched location into local storage. By keeping these separate, I was able to effectively display the results only when the user selects a previously searched location button.

This project also allowed me to learn about how to use asynchronous functions to collect weather data using the OpenWeather API. I learned how to target certain pieces of weather data which would then be displayed within certain sections of the page. I decided that a prompt would be an effective and simple way for the user to input their API key, which would then be added to local storage and assigned to a variable, so that they could only have to input this once and then freely search.

## Installation

N/A

## Usage

Instructions:

Visit the [Weather Dashboard](https://elenimg.github.io/Weather-Dashboard/).

You can use the weather dashboard to search for the current weather based on any location and the weather for the next 5 days. 

You can search by entering a location name in the search box on the left, or by selecting one of the prepopulated buttons underneath the search box. 

If it is your first time using the dashboard, you will receive a prompt asking for your API key. Once this is entered, you will be able to search for any weather information repeatedly.

You can press 'Clear Searches' to clear the list of buttons of previously searched locations.


Please see the following screenshots to see how the page works:

![Entering API Key](styles/images/Screenshot%201.png)

![Search for weather by clicking button](styles/images/Screenshot%202.png)

![Search for weather by inputting location name](styles/images/Screenshot%203.png)

![Clearing results](styles/images/Screenshot%204.png)



## Credits

The following third-party assets were used to assist with this code:

[5 day weather forecast - OpenWeather](https://openweathermap.org/forecast5)

[Weather Conditions](https://openweathermap.org/weather-conditions)

[Columns - Bootstrap](https://getbootstrap.com/docs/5.3/layout/columns/)

[Buttons - Bootstrap](https://getbootstrap.com/docs/5.3/components/buttons/)

[Spacing - Bootstrap](https://getbootstrap.com/docs/4.0/utilities/spacing/)

[String + Format - Dayjs](https://day.js.org/docs/en/parse/string-format)

[Add - Dayjs](https://day.js.org/docs/en/manipulate/add)

[JavaScript Number toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

[JavaScript: Dynamically Creating Variables for Loops - stack overflow](https://stackoverflow.com/questions/6645067/javascript-dynamically-creating-variables-for-loops)

[JavaScript: How to Check if City Name exists in the OpenWeather API city list: Error Checking - stack overflow](https://stackoverflow.com/questions/63353240/javascript-how-to-check-if-city-name-exists-in-the-openweather-api-city-list-e)

[localStorage in JavaScript: A complete guide - LogRocket](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

[pointer-events - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)