document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.querySelector('#page-title');
    const forecastContainer = document.querySelector('#hourly-forecast');
    const locationMap = document.querySelector('iframe');  

    let cityName = '';
    let mapSrc = '';

    if (window.location.pathname.includes('oregon.html')) {
        cityName = 'Portland';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8387363.365899883!2d-125.6118661411964!3d43.93357554434557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c0d99bc27d6f07%3A0xe80b2f2d55fda78!2sOregon!5e0!3m2!1sen!2sus!4v1707851625432!5m2!1sen!2sus';
        pageTitle.textContent = 'Oregon Weather';
    } else if (window.location.pathname.includes('washington.html')) {
        cityName = 'Seattle';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879303.141927896!2d-125.00059259306546!3d47.750114894108314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906729267c1f75%3A0xb9331f9ebf8cba6!2sWashington!5e0!3m2!1sen!2sus!4v1707852945410!5m2!1sen!2sus';
        pageTitle.textContent = 'Washington Weather';
    } else if (window.location.pathname.includes('idaho.html')) {
        cityName = 'Boise';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8905437.371671222!2d-118.4767325215851!3d44.34868030616427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aeffd18a7f5cd1%3A0xf0b170b4324f5e51!2sIdaho!5e0!3m2!1sen!2sus!4v1707853040123!5m2!1sen!2sus';
        pageTitle.textContent = 'Idaho Weather';
    } else if (window.location.pathname.includes('california.html')) {
        cityName = 'Sacramento';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968363.915912206!2d-124.48200396778916!3d37.774929504486376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e0b1b1d4391%3A0xa3d72e3c1f0c57a6!2sNorthern%20California!5e0!3m2!1sen!2sus!4v1707853120411!5m2!1sen!2sus';
        pageTitle.textContent = 'Northern California Weather';
    } else if (window.location.pathname.includes('british_columbia.html')) {
        cityName = 'Vancouver';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10871534.067123646!2d-136.46666673106035!3d53.726668323078135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538452b7ff8c3f03%3A0x5b1fa9bda3f8c243!2sBritish%20Columbia!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'British Columbia Weather';
    }

    locationMap.src = mapSrc;

    fetchWeather(cityName);
});

async function fetchWeather(city) {
    const apiKey = "0a5d68c9b1a546aaa1c221817251202"; // API Key
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&hours=6&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();

        if (data.error) throw new Error(data.error.message);
        if (!data.forecast || !data.forecast.forecastday.length) throw new Error("No forecast data available");

        const currentHour = new Date().getHours();
        const forecastHours = data.forecast.forecastday[0].hour;
        const hourlyForecast = forecastHours.filter(hourData => 
            new Date(hourData.time).getHours() >= currentHour
        ).slice(0, 6);

        if (hourlyForecast.length === 0) throw new Error("No upcoming hourly data available");

        const hourlyHTML = hourlyForecast.map(hour => 
            `<div class="hour">
                <p class="hour-time">${new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</p>
                <img src="https:${hour.condition.icon}" alt="${hour.condition.text}">
                <p class="hour-temp">${hour.temp_f}°F</p>
            </div>`
        ).join('');

        document.getElementById('hourly-forecast').innerHTML = hourlyHTML;

    } catch (error) {
        console.error("Weather API Error:", error);
        document.getElementById('hourly-forecast').innerHTML = `<p class="error">Something went wrong! ${error.message}</p>`;
    }
}
