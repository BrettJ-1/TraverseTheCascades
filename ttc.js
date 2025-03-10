document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.querySelector('#page-title');
    const forecastContainer = document.querySelector('#hourly-forecast');
    const locationMap = document.querySelector('iframe');

    let cityName = '';
    let mapSrc = '';

    if (window.location.pathname.includes('oregon.html')) {
        cityName = 'Oregon';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4860261.735338128!2d-124.56624486951726!3d44.572021338704065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bff7df31a8c621%3A0x43ecf7cbdd3b3eb!2sOregon!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Oregon 6-Hour Forecast';
    } else if (window.location.pathname.includes('portland.html')) {
        cityName = 'Portland';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224168.29304794168!2d-123.26204309822134!3d45.52306425096367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a3b3110c24d%3A0xb6f7f63a5db4a4b4!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1707851625432!5m2!1sen!2sus';
        pageTitle.textContent = 'Portland 6-Hour Forecast';
    } else if (window.location.pathname.includes('washington.html')) {
        cityName = 'Washington';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879303.141927896!2d-125.00059259306546!3d47.750114894108314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906729267c1f75%3A0xb9331f9ebf8cba6!2sWashington!5e0!3m2!1sen!2sus!4v1707852945410!5m2!1sen!2sus';
        pageTitle.textContent = 'Washington 6-Hour Forecast';
    } else if (window.location.pathname.includes('seattle.html')) {
        cityName = 'Seattle';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26813.1093046507!2d-122.35703418023377!3d47.60620948627157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901123b0fba8e1%3A0x55c1b646947d8ed!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Seattle 6-Hour Forecast';
    } else if (window.location.pathname.includes('idaho.html')) {
        cityName = 'Boise';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8905437.371671222!2d-118.4767325215851!3d44.34868030616427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aeffd18a7f5cd1%3A0xf0b170b4324f5e51!2sIdaho!5e0!3m2!1sen!2sus!4v1707853040123!5m2!1sen!2sus';
        pageTitle.textContent = 'Idaho 6-Hour Forecast';
    } else if (window.location.pathname.includes('california.html')) {
        cityName = 'Sacramento';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968363.915912206!2d-124.48200396778916!3d37.774929504486376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e0b1b1d4391%3A0xa3d72e3c1f0c57a6!2sNorthern%20California!5e0!3m2!1sen!2sus!4v1707853120411!5m2!1sen!2sus';
        pageTitle.textContent = 'Northern California 6-Hour Forecast';
    } else if (window.location.pathname.includes('british_columbia.html')) {
        cityName = 'British Columbia';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10871534.067123646!2d-136.46666673106035!3d53.726668323078135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538452b7ff8c3f03%3A0x5b1fa9bda3f8c243!2sBritish%20Columbia!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'British Columbia 6-Hour Forecast';
    } else if (window.location.pathname.includes('vancouver.html')) {
        cityName = 'Vancouver';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26864.249142382208!2d-123.11622673418045!3d49.28272907941716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d7c8d9b1b1%3A0xf49d92b5d8b5bbbf!2sVancouver%2C%20BC!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Vancouver 6-Hour Forecast';
    } else if (window.location.pathname.includes('cannon_beach.html')) {
        cityName = 'Cannon Beach';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27368.78336028292!2d-123.98137585190955!3d45.89177350299278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950f21c1cf6377%3A0xa50e4a192f71b1e7!2sCannon%20Beach%2C%20OR!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Cannon Beach 6-Hour Forecast';
    } else if (window.location.pathname.includes('glass_beach.html')) {
        cityName = 'Glass Beach';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.988798201629!2d-123.80892912349191!3d39.44849582066105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f77b1d4c9ad99%3A0xa05b2e49de4b3a5e!2sGlass%20Beach!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Glass Beach 6-Hour Forecast';
    } else if (window.location.pathname.includes('ruby_beach.html')) {
        cityName = 'Ruby Beach';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27088.99802857653!2d-124.4201422093744!3d47.71143289367154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491f995c5b12e95%3A0x7411d9b9a7927f8e!2sRuby%20Beach!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Ruby Beach 6-Hour Forecast';
    } else if (window.location.pathname.includes('mt_rainier.html')) {
        cityName = 'Mount Rainier National Park';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6447751.173024765!2d-121.75450501727018!3d46.85230878835857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490ff4b04c2b0d1%3A0x4c4d554430e67f5e!2sMount%20Rainier!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Mt. Rainier 6-Hour Forecast';
    } else if (window.location.pathname.includes('multnomah_falls.html')) {
        cityName = 'Multnomah Falls';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26866.28172593292!2d-122.11924387583208!3d45.57526997333356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495e5d024b5a6c5%3A0x65c108a4692ed124!2sMultnomah%20Falls!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Multnomah Falls 6-Hour Forecast';
    } else if (window.location.pathname.includes('redwoods.html')) {
        cityName = 'Redwoods State Park';
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104010.3709018486!2d-124.00310030461297!3d41.21318235589968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d17f9343cf1c45%3A0x7c079d0a5f3e5a1!2sRedwood%20National%20Park!5e0!3m2!1sen!2sus!4v1707853190345!5m2!1sen!2sus';
        pageTitle.textContent = 'Redwoods State Park 6-Hour Forecast';
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