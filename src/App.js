import React, { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios'
import { Spin } from 'antd';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherForecast from './components/weather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [foreCastData,setForeCastData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let apiKey = "1635890035cbba097fd5c26c8ea672a1";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      const { lat, lon } = response.data.city.coord;
      setForeCastData(response.data.list);
      setLatitude(lat);
      setLongitude(lon);
      setCity("")
    } catch (error) {
      setCity("")
      setIsLoading(false);
      toast.error('Please enter valid City name.');
    }
  };
  
 
  return (
    <div className='container'>
      <div className='nav-bar'>
        <h2 className='heading'>Weather in your city</h2>

        <div className='text-box'>
          <input value={city} type='text' className='text-filed' placeholder='Please Enter city' onChange={handleChange} />
          <button className='search-btn' onClick={handleSearchClick} >
          <QuestionCircleOutlined /> Search
          </button>
          {
            isLoading &&<Spin className='spinner'  size='large' />
          }
          
        </div>

      </div>

      <WeatherForecast forecastData={foreCastData} />
      <ToastContainer />     
    </div>
  );
}

export default App;
