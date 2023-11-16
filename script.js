// Create dashboard - to include search section, buttons of previously searched locations, current weather for search result and future weather
// Connect weather API Key
// When you press search a location or press a button, create a function so that the current and future weather conditions are displayed

$('.search-button').on('click', function(event){
    event.preventDefault();
    var usersCityEntry = $('.weather-search').val().trim();

    var yourAPIkey = "56e83c8f1e65cf3c5412e2ae1f8c1687"

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + usersCityEntry + "&appid=" + yourAPIkey;

    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function (data){
        var cityName = data.city.name;
        var today = dayjs().format('dddd Do MMMM YYYY')
        var currentTemperature = (data.list[0].main.temp - 273.15).toFixed(2)
        var currentWeatherCondition = data.list[0].weather[0].main;
        var currentWeatherIcon =  $('<img>').attr("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png").attr("alt", "Weather icon");
        var currentHumidity = data.list[0].main.humidity + "%";
        var currentWindSpeed = data.list[0].wind.speed + "m/s";

    $('#today').append(cityName, today, currentTemperature, currentWeatherCondition, currentWeatherIcon, currentHumidity, currentWindSpeed)

    })


})



// Create a weather conditions object to match a weather condition with the correpsonding icon

// Add search result as a button

// Add search result to local storage

// Create a function to clear previously searched buttons
// Create a default/error message if location searched has no results