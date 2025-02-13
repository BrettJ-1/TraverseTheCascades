document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.querySelector('#page-title');
    const forecastContainer = document.querySelector('#hourly-forecast');
    const locationMap = document.querySelector('#location-map');

    let cityName = '';
    let mapSrc = '';

    if (window.location.pathname.includes('oregon.html')) {
        cityName = 'Portland';
        mapSrc = 'https://www.google.com/maps/embed?pb=...'; // Oregon map URL
        pageTitle.textContent = 'Oregon';
    } else if (window.location.pathname.includes('washington.html')) {
        cityName = 'Seattle';
        mapSrc = 'https://www.google.com/maps/embed?pb=...'; // Washington map URL
        pageTitle.textContent = 'Washington';
    } else if (window.location.pathname.includes('idaho.html')) {
        cityName = 'Boise';
        mapSrc = 'https://www.google.com/maps/embed?pb=...'; // Idaho map URL
        pageTitle.textContent = 'Idaho';
    } else if (window.location.pathname.includes('california.html')) {
        cityName = 'Sacramento';
        mapSrc = 'https://www.google.com/maps/embed?pb=...'; // California map URL
        pageTitle.textContent = 'Northern California';
    } else if (window.location.pathname.includes('british_columbia.html')) {
        cityName = 'Vancouver';
        mapSrc = 'https://www.google.com/maps/embed?pb=...'; // British Columbia map URL
        pageTitle.textContent = 'British Columbia';
    }

    locationMap.src = mapSrc; 
    fetchWeather(cityName);  
});

async function fetchWeather(city) {
    const apiKey = "0a5d68c9b1a546aaa1c221817251202"; // API Key
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&hours=6`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) throw new Error(data.error.message);
        if (!data.forecast || !data.forecast.forecastday.length) throw new Error("No forecast data available");

        const currentHour = new Date().getHours();
        const forecastHours = data.forecast.forecastday[0].hour;
        const hourlyForecast = forecastHours.filter(hourData => 
            new Date(hourData.time).getHours() >= currentHour
        ).slice(0, 6);

        if (hourlyForecast.length === 0) throw new Error("No upcoming hourly data available");

        const hourlyHTML = hourlyForecast.map(hour => `
            <div class="hour">
                <p>${new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</p>
                <img src="https:${hour.condition.icon}" alt="${hour.condition.text}">
                <p>${hour.temp_f}°F</p>
            </div>
        `).join('');

        document.getElementById('hourly-forecast').innerHTML = hourlyHTML;

    } catch (error) {
        console.error("Weather API Error:", error);
        document.getElementById('hourly-forecast').innerHTML = `<p class="error">Something went wrong! ${error.message}</p>`;
    }
}
