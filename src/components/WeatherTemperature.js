import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    FOG,
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    WINDY,
}  from './../constants/weathers';

const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    if(icon){
        return <WeatherIcons name={icon} size="2x"/>
    }else{
        return <WeatherIcons name={"day-sunny"} size="2x"/>
    }
}

const WeatherTemperature = ({temperature, weatherState})=>(
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
)

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired,
}

export default WeatherTemperature;