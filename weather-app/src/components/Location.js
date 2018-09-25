import React from 'react';

//Constant
const Location = (props) => {
    //Destructuring, descompone el props y busca city dentro de él
    const {city} = props;
    //Normal
    //const city = props.city;

    return (
        <div><h1>{city}</h1></div>
    );
};

export default Location;