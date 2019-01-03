import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { setCity } from './actions';
import ForecastExtended from './components/ForecastExtended';
import PropTypes from 'prop-types';

const cities = [
  'Buenos Aires,ar',
  'Bogota,co',
  'Mexico,mex',
  'Tunja,co',
  'washington,us',
  'Singapore,SG',
  'Barcelona,es'
]

class App extends Component {
  

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({city});
    this.props.setCity(city);
  }

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="App">
              <header className="App-header">
                <LocationList cities =  {cities} 
                  onSelectedLocation={this.handleSelectionLocation} />
              </header>
            </div>
          </Col>
          <Col xs={12} md={6}>
          <Paper>
            <div className="detail" elevation={4}>
              { city &&
                <ForecastExtended city={city}/>
              }
            </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App);
