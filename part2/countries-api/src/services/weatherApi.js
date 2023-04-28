async function fetchWeatherData(lat, lon) {
    //const APPID = "7fb5612e9f6ac65b21e4280dacefbb25";
    const REACT_APP_API_KEY = "7fb5612e9f6ac65b21e4280dacefbb25"

    try {
        const response1= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${REACT_APP_API_KEY}`, {
            method: 'GET',
            credentials: 'same-origin'
        });
        console.log("Service Response", response1)
        console.log("Service LatLang AFTER", lat, lon)
        return await response1.json();
    } catch (error) {
        console.error("There was an error getting weather data:", error);
    }
}

export default {
    fetchWeatherData
}