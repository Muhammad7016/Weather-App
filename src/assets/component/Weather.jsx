import axios from 'axios';
import React, { useState } from 'react';

function Weather() {
    const [city, setCity] = useState('');
  
    const handleCity = (event) => {
      setCity(event.target.value);
    };
    const fetctweather= async()=> {
        const apiKey = '403579fa37c0a9e77f07d158ebe68125'; 
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        console.log(response.data)

        }
        catch{

        }

    }
  
    const ASDF = () => {
      fetctweather();
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
     
        <input type="text" placeholder="Enter your City Name" value={city}onChange={handleCity}
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-80 focus:outline-none focus:border-blue-500"
        />
        <button onClick={ASDF}
        className="bg-blue-500  text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded">
        Get Weather</button>
      </div>
    );
  }
  
  export default Weather;
  