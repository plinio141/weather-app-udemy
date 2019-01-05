import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForeCastItem';

//css
import './styles.css';


const renderForCastItemDays = (forecastData) => {
    return forecastData.map(forecast => 
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>);
    //return <h1>render item</h1>
}

const renderProgress = () => {
    return <h3>"Cargando Pronótico extendido"</h3>;
}

const ForecastExtended = ({ city, forecastData }) => {
    return (<div>
            <h2 className='forecats-title'>Pronóstico Extendido {city}</h2>
            {forecastData ? 
                renderForCastItemDays(forecastData):
                renderProgress() }
        </div>);
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;