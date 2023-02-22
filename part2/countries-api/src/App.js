import { useEffect, useState } from 'react';

import countriesApi from "./services/countriesApi"
import './App.css';
import Search from './components/Search';
import CountryInfo from './components/CountryInfo';


const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countriesList, setCountriesList] = useState([])
  const [countryInfo, setCountryInfo] = useState(null
  )

  //TODO
  //might help for later
  // https://stackoverflow.com/questions/65189680/rest-countries-api-how-to-get-content


  function findMatching(arrayToSearch, valueToMatch) {
    return arrayToSearch.filter(function (arrayEntry) {
      return arrayToSearch.every(() => {
        const string = "stringy"
        if (valueToMatch !== "") {
          if (typeof arrayEntry === typeof string) {
            if (arrayEntry.toLowerCase().includes(valueToMatch.toLowerCase())) {
              return true;
            }
          }
          if (arrayEntry === (valueToMatch)) { return true; }
          else {
            return null
          }
        }
      })
    });
  }

  function formatNumber(number) {
    const numberFormat = Intl.NumberFormat();
    return numberFormat.format(number)
  }

  countriesApi
    .getCountryNameByCode("FRA")

  useEffect(() => {
    if (countriesList.length === 0 && countriesList !== []) {
      setCountriesList(["No countries match your search"])
    }
    if (countriesList.length === 1 && countriesList[0] !== "List of results is too long" && countriesList[0] !== "No countries match your search") {
      countriesApi
        .getCountryInfo(countriesList[0])
        .then(response => {
          setCountryInfo({
            Name: response.Name,
            Region: response.Region,
            Capital: response.Capital,
            Borders: response.Borders,
            Area: formatNumber(response.Area),
            Population: formatNumber(response.Population),
            Languages: response.Languages,
            FlagPNG: response.FlagPNG
          })
        })
        .catch(error => console.log(`there was an error: ${error}`))
    }
  }, [searchValue, countriesList])

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
    countriesApi
      .getAllCountryNames()
      .then(response => {
        const fullMatchList = findMatching(response, event.target.value)
        if (fullMatchList.length <= 10) {
          setCountriesList(fullMatchList)
        } else {
          setCountriesList(["List of results is too long"])
        }
      })
      .catch(error => console.log(`there was an error: ${error}`))
  }

  return (
    <div>
      <Search
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <div>
        {
          searchValue === '' ?
            <p>Please search for a country</p>
            :
            <ul>
              {countriesList.map((country) => {
                return (
                  <li
                  key={country}>{country}
                  &nbsp;
                  {country !== "No countries match your search" && country !== "List of results is too long"?
                    <button type="click"
                    onClick={() => {
                      console.log("COUNTRY", country)
                        countriesApi
                            .getCountryInfo(country)
                            .then(response => {
                                setCountryInfo({
                                    Name: response.Name,
                                    Region: response.Region,
                                    Capital: response.Capital,
                                    Borders: response.Borders,
                                    Area: formatNumber(response.Area),
                                    Population: formatNumber(response.Population),
                                    Languages: response.Languages,
                                    FlagPNG: response.FlagPNG
                                })
                            })
                            .catch(error => {
                              alert(`The API has failed to fetch information for this country.
                              \r\nTry search: https://restcountries.com/v2/name/${country}`)
                              console.log(`there was an error: ${error}`)})
                    }}
                >Show</button>
                : <p></p>
                  }
                  
              </li>
                )
              })}
            </ul>
        }
      </div>
      <div>
        {
          countryInfo ?
            <CountryInfo name={countryInfo.Name}
              region={countryInfo.Region}
              capital={countryInfo.Capital}
              area={countryInfo.Area}
              borders={countryInfo.Borders}
              population={countryInfo.Population}
              languages={countryInfo.Languages}
              flagPNG={countryInfo.FlagPNG}
            />
            :
            <p></p>
        }
      </div>
    </div>
  );
}

export default App;
