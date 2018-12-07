import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import { api_weather } from './../../constants/api_url'
import PropTypes from 'prop-types';
import './styles.css';

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    //Se recomienda no usar
    /*componentWillMount() {
        console.log("componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }*/
    
    
    

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
                {data != null ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/>
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

WeatherLocation.prototyped = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;