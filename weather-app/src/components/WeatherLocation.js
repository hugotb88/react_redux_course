import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

//Create  a constant
const WeatherLocation = () => (
  <div>
      <Location/>
      <WeatherData/>
  </div>
);


//Export the component, this allows others components to use this component
export default WeatherLocation;