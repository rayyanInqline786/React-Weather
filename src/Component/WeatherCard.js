import React from 'react';

const WeatherCard = (props) => {
    let { temp, humidity, feelsLike, main, description, city, country } = props;
    temp = temp-273.15
    temp = temp.toFixed(2)
    feelsLike = feelsLike-273.15
    feelsLike = feelsLike.toFixed(2)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h4>Temperature : {temp} &#x2103;</h4>
                    <hr></hr>
                    <h4>FeelsLike : {feelsLike} &#x2103;</h4>
                    <hr></hr>
                    <h4>Humidity : {humidity}</h4>
                    <hr></hr>
                    <h4>City : {city} </h4>
                    <hr></hr>
                    <h4>Country : {country} </h4>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;