import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";

function Weather1() {
    const [city, setCity] = useState('');
    const [weather,setWeather] =useState('');
     useEffect(()=>{
      const weatherUpdate =localStorage.getItem('weatherData')
      if(weatherUpdate){
        setWeather(JSON.parse(weatherUpdate))
      }
     },[])
  
    const handleCity = (event) => {
      setCity(event.target.value);
    };
    const fetctweather= async()=> {
        const apiKey = '403579fa37c0a9e77f07d158ebe68125'; 
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeather(response)
            localStorage.setItem('weatherData', JSON.stringify(response.data))
            console.log(response.data)
        }
        catch(error){
          console.log("Error Fatched",error)
        }
    }
    const ASDF = () => {
      fetctweather();
    };
    return (
      <div className="flex flex-col items-center">

     <div className='font-bold py-10 text-5xl text-indigo-500'> Weather App</div>
     <div className=' font-bold md:text-[20px] md:p-[20px] text-black'>
    Today :  <ReactTyped  className='pl-3' strings={["You can check the temperature weather and wind of any city here."]} typeSpeed={40} loop={true} backSpeed={50} />
    </div>

        <input type="text" placeholder="Enter your City Name" value={city}onChange={handleCity}
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-[500px] focus:outline-none focus:border-blue-500"/>

        <button onClick={ASDF}
        className="bg-teal-500  text-white font-bold py-4 px-4 border-b-4 border-teal-500 hover:border-blue-500  rounded">
        Get Weather</button>
        {weather &&(<>
          <div className='20xl font-bold py-3'>{weather.data.name} </div>
         <div className='10xl py-3'>Tempature is :{weather.data.main.temp}</div>
          <div className='10xl py-3'>Wind Speed :{weather.data.wind.speed} km/h</div>
        </>)}
      </div>
      
    );
  }
  
  export default Weather1;
  