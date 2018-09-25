import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

//Constant
const WeatherData = () => (
    <div>
        <WeatherTemperature
            temperature={20}
            weatherState={''}/>
        <WeatherExtraInfo
            humidity={80}
            wind={"10 m/s"}/>
    </div>
);

//export component
export default WeatherData;