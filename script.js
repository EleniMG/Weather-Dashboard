// Create dashboard - to include search section, buttons of previously searched locations, current weather for search result and future weather
// Connect weather API Key
// When you press search a location or press a button, create a function so that the current and future weather conditions are displayed
$('.search-button').on('click', function(event){
    event.preventDefault();
    var usersCityEntry = $('.weather-search').val();

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + usersCityEntry + "&appid=56e83c8f1e65cf3c5412e2ae1f8c1687";

    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function(data){
        var cityName = data.city.name;
        var today = dayjs().format('dddd Do MMMM YYYY')
        console.log(cityName, today)
    })

})





// Create a weather conditions object to match a weather condition with the correpsonding icon

// Add search result as a button

// Add search result to local storage

// Create a function to clear previously searched buttons
// Create a default/error message if location searched has no results