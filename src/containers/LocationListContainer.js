import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LocationList from './../components/LocationList';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';

class LocationListContainer extends Component {

    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList cities =  {this.props.citiesWather} 
                onSelectedLocation={this.handleSelectionLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWather: PropTypes.array,
    city: PropTypes.string.isRequired,
}

/*const mapDispatchToProps = dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: value => dispatch(setWeather(value)),
});*/
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const mapStateToProps = state => ({
    citiesWather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);