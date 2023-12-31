// Create dashboard - to include search section, buttons of previously searched locations, current weather for search result and future weather
// Connect weather API Key
// When you press search a location or press a button, create a function so that the current and future weather conditions are displayed

function displayCurrentWeatherData(data){
    var todaySection = $('#today')
    todaySection.empty();
    var cityName = $('<h1>').text(data.city.name);

    var today = $('<h2>').text("Today's date: " + dayjs().format('dddd Do MMMM YYYY'))
    var currentTempDegrees = (data.list[0].main.temp - 273.15).toFixed(2)
    var currentTempFahr = ((currentTempDegrees / 1.8) + 32).toFixed(2)
    var currentTemperature = $('<p>').text("Current Temperature: " + currentTempDegrees + "°C / " + currentTempFahr + "°F")
    var currentWeatherCondition = $('<p>').text("Condition: " + data.list[0].weather[0].main);
    var currentWeatherIcon =  $('<img>').attr("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png").attr("alt", "Weather icon");
    var currentHumidity = $('<p>').text("Humidity: " + data.list[0].main.humidity + "%");
    var currentWindSpeed = $('<p>').text("Wind Speed: " + data.list[0].wind.speed + "m/s");

    todaySection.append(cityName, today, currentTemperature, currentWeatherCondition, currentHumidity, currentWindSpeed, currentWeatherIcon)
}

// Function for future weather data
// Can create a table with 5 columns for the 5 days ahead

function displayFutureWeatherData(data){
    var startDate = dayjs()

    var futureSection = $('#forecast')

    futureSection.empty();

    for (var i = 1; i <= 5; i++){
        var datesColumn = $('<div>').addClass('col').attr('data-days-after', [i])
        futureSection.append(datesColumn)
        
        var consecutiveDay = $('<h4>').append(startDate.add([i], 'd').format('dddd Do MMMM YYYY'))
    
        var futureWeatherIcon =  $('<img>').attr("src", "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png").attr("alt", "Weather icon");

        var futureTempDegrees = (data.list[i].main.temp - 273.15).toFixed(2)
        var futureTempFahr = ((futureTempDegrees / 1.8) + 32).toFixed(2)
        var futureTemperature = $('<p>').text("Temperature: " + futureTempDegrees + "°C / " + futureTempFahr + "°F")
        var futureWeatherCondition = $('<p>').text("Condition: " + data.list[i].weather[0].main);
        var futureHumidity = $('<p>').text("Humidity: " + data.list[i].main.humidity + "%");

        datesColumn.append(consecutiveDay, futureTemperature, futureWeatherCondition, futureHumidity, futureWeatherIcon)
    }

}

// Add search result as a button

var previousSearches = JSON.parse(localStorage.getItem("searches")) || []

// Function to clear storage and buttons
// Create a button to clear results - using Bootstrap
// Add event listener

var clearButton = $('<button>').text('Clear Searches').addClass('btn-primary').addClass('clear').addClass('btn')

clearButton.on('click', function(event){
    event.preventDefault();

    localStorage.removeItem("searches");

    previousSearches = []

    $('#history').empty();

})

function renderButtons(){
    $('#history').empty();

    for (var j = 0; j < previousSearches.length; j++){

        var button = $('<button>');
        button.addClass('location');
        // Adding Bootstrap buttons
        button.addClass('btn');
        button.addClass('btn-outline-success');
        button.css('margin-top', "5px");
        button.css('margin-bottom', "5px");
        button.attr('data-location', previousSearches[j]);
        button.text(previousSearches[j]);
        $('#history').append(button)

    }

    $('aside').append(clearButton);

}

renderButtons()


// Add search result to local storage

function addToStorage(){
    localStorage.setItem("searches", JSON.stringify(previousSearches))
}


function getAPIKey(){
    var yourAPIKey = null;
    
    if (localStorage.getItem('api-key') === null){
        yourAPIKey = prompt("Please enter your API key")
        localStorage.setItem('api-key', yourAPIKey)
    } else {
        yourAPIKey = localStorage.getItem('api-key')
    }

    return yourAPIKey
}



$('.search-button').on('click', function(event){
    event.preventDefault();
    var userEntry = $('.weather-search').val().trim();
    var splitString = userEntry.toLowerCase().split("");
    var capitalLetter = splitString[0].toUpperCase();
    splitString.shift([0])
    splitString.unshift(capitalLetter)
    var usersCityEntry = splitString.join("")

    var yourAPIKey = getAPIKey()

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + usersCityEntry + "&appid=" + yourAPIKey;

    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function (data){

        if (!usersCityEntry || data.city == undefined){
            alert("Please enter a valid location to search")
            // location.reload()
    
        } else {
            previousSearches.push(usersCityEntry)
    
            displayCurrentWeatherData(data);

            displayFutureWeatherData(data);

            renderButtons();

            addToStorage();
      
        }

     })   

    })


    // Function for when the user selects a button from search history section
    $('#history').on('click', function(event){
        event.preventDefault();
        
        var yourAPIKey = getAPIKey()
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + event.target.dataset.location + "&appid=" + yourAPIKey;
    
        fetch(queryURL).then(function(response){
            return response.json();
        }).then(function (data){
    
            displayCurrentWeatherData(data);
    
            displayFutureWeatherData(data);
    
         })   
    
        })