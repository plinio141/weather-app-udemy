import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transfromForecast'
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather'

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const SET_WEATHER = 'SET_WEATHER'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'

const setCity = value => ({ type: SET_CITY, value });
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload});

export const setSelectedCity  = value => {
    return (dispatch, getState) => {
        const api_weather = getUrlForecastByCity(value);   
        dispatch(setCity(value));
        const state = getState();
        const date = state.cities[value] && state.cities[value].forecastDataDate;

        const now = new Date();

        if(date && (now - date) < 1 * 60 * 1000){
            return;    
        }

        return fetch(api_weather).then(resolve =>{
            return resolve.json();            
        }).then(weather_data => {
            const forecastData = transformForecast(weather_data);
            dispatch(setForecastData({city: value, forecastData}));
        }); 
    }
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then(resolve =>{
                return resolve.json();            
            }).then(data => {
                const weather = transformWeather(data);
                dispatch(setWeatherCity({city, weather}));
            });
        });        
    }    
}