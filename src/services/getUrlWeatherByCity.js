import { url_base_weather, api_key } from './../constants/api_url'

const getUrlForecastByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`
}

export default getUrlForecastByCity;