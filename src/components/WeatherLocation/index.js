import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData'
import PropTypes from 'prop-types';
import './styles.css';


const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data != null ?
            <WeatherData data={data}></WeatherData> :
            <CircularProgress size={50}/>
        }
        {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
    </div>
)

WeatherLocation.prototyped = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;