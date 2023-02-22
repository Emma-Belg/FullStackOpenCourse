import axios from "axios"

const v2BaseUrl = "https://restcountries.com/v2/"
const v3BaseUrl = "https://restcountries.com/v3.1/"
const allUrl = "all"
const nameUrl = "name"
const alphaUrl = "alpha"

// const getAllCountriesApi = () => {
//     const request = axios.get(`${v3BaseUrl}${allUrl}`)
//     return request.then(response => response.data)
// }

async function getAllCountriesApi() {
    const request = await axios.get(`${v3BaseUrl}${allUrl}`)
    return request.data
}

async function getAllCountryNames() {
    const allCountryNames = []
    const request = await axios.get(`${v3BaseUrl}${allUrl}`)
    const data = request.data
    data.map(country => {
        allCountryNames.push(country.name.common)
    })
    return allCountryNames
}

async function getCountryInfo(countryName) {
    const request = await axios.get(`${v2BaseUrl}${nameUrl}/${countryName}`)
    
    const data = request.data[0]
    let languages = data.languages
    console.log("data", data)
    let languagesArray = []
    languages.map(language => languagesArray.push(language.name))
    
    let countryObject = {
        Name: data.name,
        Region: data.region,
        Capital: data.capital,
        Area: data.area,
        Population: data.population,
        Borders: data.borders,
        Languages: languagesArray,
        FlagPNG: data.flags.png
    }
    
    console.log("countryObject", countryObject)
    return countryObject
}

async function getCountryNameByCode(countryCode) {
    if(!countryCode.includes(" ")){
        const request = await axios.get(`${v3BaseUrl}${alphaUrl}/${countryCode}`)
        const data = request.data
        const name = data[0].name.common
        return name
    } else {
        return "This country does not border any other countries."
    }
}

export default {
    getAllCountriesApi,
    getAllCountryNames,
    getCountryInfo,
    getCountryNameByCode
}