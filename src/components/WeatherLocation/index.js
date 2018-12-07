import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import { api_weather } from './../../constants/api_url'
import PropTypes from 'prop-types';
import './styles.css';
import {
    SUN,
}  from './../../constants/weathers';

const data = {
    temperature: 98,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data
        };
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            return resolve.json();            
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render (){
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

WeatherLocation.prototyped = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;