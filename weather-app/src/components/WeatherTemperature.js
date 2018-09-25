import React from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherExtraInfo from "./WeatherExtraInfo";

//Constant where we determinate the state and catalogue of icons
const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
};

//Function to get the correct weather icon
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />;
};

const WeatherTemperature = ({temperature, weatherState}) =>(
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;