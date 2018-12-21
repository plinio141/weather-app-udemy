import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transfromForecast'
import ForecastItem from './ForeCastItem';

//css
import './styles.css';

// const days = [
//     'lunes',
//     'martes',
//     'miercoles',
//     'jueves',
//     'viernes',
// ]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'nomal',
//     wind: 'normal'
// }

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city => {
        const api_weather = getUrlForecastByCity(city);        
        fetch(api_weather).then(resolve =>{
            return resolve.json();            
        }).then(weather_data => {
            const forecastData = transformForecast(weather_data);
            this.setState({forecastData});
        }); 
    }

    renderForCastItemDays(forecastData){
        return forecastData.map(forecast => 
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>);
        //return <h1>render item</h1>
    }

    renderProgress = () => {
        return <h3>"Cargando Pronótico extendido"</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecats-title'>Pronóstico Extendido {city}</h2>
                {forecastData ? 
                    this.renderForCastItemDays(forecastData):
                    this.renderProgress() }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;