import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import PropTypes from 'prop-types';
import './styles.css';
import {
    SUN,
    WINDY,
}  from './../../constants/weathers';

const data = {
    temperature: 98,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 8,
    weatherState: WINDY,
    humidity: 1,
    wind: '1 m/s',
}

class WeatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Samacá',
            data
        };
    }

    handleUpdateClick = () =>{
        this.setState({data:data2});
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