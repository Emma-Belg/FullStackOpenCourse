const Weather = ({city, description, temp, windSpeed, icon}) => {

    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>The weather is currently {description}</p>
            <p>Temperature: {temp} &#8451;</p>
            <p>Wind: {windSpeed} meters/sec</p>
            <img alt={`weather is ${description}`} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
        </div>
    )

}

export default Weather;