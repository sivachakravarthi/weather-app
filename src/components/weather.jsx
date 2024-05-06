import React from 'react';

const WeatherForecast = ({ forecastData }) => {
    console.log("forecastData",forecastData)
    const slicedData = forecastData.slice(0, 5);
  return (
    <div className='content'>
      {slicedData?.map((forecast, index) => (
        <div className='firstDayWeather' key={index}>
          <div className='firstDayWeather-date'>Date: {forecast.dt_txt.split(' ')[0]}</div>
          <div className='firstDayWeather-temp'>Temperature: {forecast.main.temp}</div>
          <div className='firstDayWeather-min-max-header'>
            <div className='min'>Min</div>
            <div className='max'>Max</div>
          </div>
          <div className='firstDayWeather-min-max-header'>
            <div className='min'>{forecast.main.temp_min}</div>
            <div className='max'>{forecast.main.temp_max}</div>
          </div>
          <div className='firstDayWeather-min-max-header'>
            <div className='min'>Pressure</div>
            <div className='max'>{forecast.main.pressure}</div>
          </div>
          <div className='firstDayWeather-min-max-header'>
            <div className='min'>Humidity</div>
            <div className='max'>{forecast.main.humidity}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
