// Create dashboard - to include search section, buttons of previously searched locations, current weather for search result and future weather
// Connect weather API Key
// When you press search a location or press a button, create a function so that the current and future weather conditions are displayed

function displayCurrentWeatherData(data){
    var todaySection = $('#today')
    var cityName = $('<h1>').text(data.city.name);

    var today = $('<h2>').text("Today's date: " + dayjs().format('dddd Do MMMM YYYY'))
    var currentTempDegrees = (data.list[0].main.temp - 273.15).toFixed(2)
    var currentTempFahr = ((currentTempDegrees / 1.8) + 32).toFixed(2)
    var currentTemperature = $('<p>').text("Current Temperature: " + currentTempDegrees + "°C / " + currentTempFahr + "°F")
    var currentWeatherCondition = $('<p>').text("Condition: " + data.list[0].weather[0].main);
    var currentWeatherIcon =  $('<img>').attr("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png").attr("alt", "Weather icon");
    var currentHumidity = $('<p>').text("Humidity: " +data.list[0].main.humidity + "%");
    var currentWindSpeed = $('<p>').text("Wind Speed: " + data.list[0].wind.speed + "m/s");

    todaySection.append(cityName, today, currentTemperature, currentWeatherCondition, currentWeatherIcon, currentHumidity, currentWindSpeed)
}

// Function for future weather data
// Can create a table with 5 columns for the 5 days ahead



function displayFutureWeatherData(data){
    var startDate = dayjs()

    var futureSection = $('#forecast')
    var datesArray = []

    for (var i = 1; i <= 5; i++){
        datesArray.push(startDate.add([i], 'd').format('dddd Do MMMM YYYY'))
    }

    console.log(datesArray)

}

$('.search-button').on('click', function(event){
    event.preventDefault();
    var usersCityEntry = $('.weather-search').val().trim();

    var yourAPIkey = "56e83c8f1e65cf3c5412e2ae1f8c1687"

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + usersCityEntry + "&appid=" + yourAPIkey;

    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function (data){

        displayCurrentWeatherData(data)

        displayFutureWeatherData(data)

    })


})


// Add search result as a button

// Add search result to local storage

// Create a function to clear previously searched buttons
// Create a default/error message if location searched has no results