import { useEffect, useState } from "react"
import countriesApi from "../services/countriesApi"

const CountryInfo = ({ name, region, capital, area, borders, population, languages, flagPNG }) => {
    //code to translate country code (as given by API call) into country name
    // const [borderCountries, setBorders] = useState([])
    // let borderArray = [];
    // console.log("borders", borders)
    // useEffect(() => {
    //     setBorders(["Please wait"])
    //     if (borders)
    //         borders.map(country => {
    //             const borderingCountries = countriesApi.getCountryNameByCode(country)
    //             borderingCountries.then(response => {
    //                 borderArray.push(response)
    //                 console.log("responseArrINSIDE", borderArray)
    //                 console.log("response", response)
    //                 while (borderArray.length !== borders.length) {
    //                     return setBorders(["Please wait..."])
    //                 }
    //                 setTimeout(() => {
    //                     setBorders(borderArray)
    //                     borderArray = borders
    //                 }, 2500)
    //             })
    //         })
    //     else {
    //         console.log("DOING ELSE")
    //         setBorders(['This country does not border any others.'])
    //     }
    // }, [borders])

    return (
        <div>
            <h2>{name}</h2>
            <p><b>Region:</b> {region}</p>
            <p><b>Capital:</b> {capital}</p>
            <p><b>Area:</b> {area} square kms</p>
            <p><b>Population:</b> {population}</p>
            {/* <p><b>Borders:</b></p>
            <ul>{borders ?
                borderCountries.map(border => {
                    return <li key={border}>{border}</li>
                })
                :
                <li>This country does not border any others</li>
            }
            </ul> */}

            <p><b>Languages:</b></p>
            <ul>
                {languages.map(language => {
                    return <li key={language} >{language}</li>
                })
                }
            </ul>
            <br />
            <span className="flagSpan">
                <img className="flag" alt={`Flag of ${name}`} src={flagPNG} />
            </span>

        </div>
    )
}

export default CountryInfo