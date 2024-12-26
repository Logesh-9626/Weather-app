import { useState, useEffect } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import Current from './Component/Current';
import Forecast from './Component/Forecast';


function App() {
  const [city, setcity] = useState();

  const [Clickedcity,setClickedcity]=useState();

  const [citySuggestion, setcitySuggestion] = useState([]);

  const [currentWeather,setcurrent]=useState();

  const [forecastWeather,setforecast]=useState();
  
  const [location,setlocation]=useState();
 
  

  const autoComURL = "http://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";

  const WeatherURL = (city) => `http://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoCompApi();
    }
  }, [city])

  const fetchAutoCompApi = async () => {
    try {
      const responce = await axios.get(autoComURL + city)
      const resp = responce.data;
      console.log(resp);
      const citydata = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`
      });
      setcitySuggestion(citydata);
    }
    catch (error) {
      console.log(error)
    }
  };
  const handleSelectedCity = async (city) => {
    console.log('clicked city', city)
    setClickedcity(city);
    fetchWeatherAPI(city);
    setcitySuggestion([]);
     }
     
     
  const fetchWeatherAPI = async(city)=>{
    try {
      const responce = await axios.get(WeatherURL(city))
      const resp = responce.data
      console.log(resp)

      setcurrent(resp.current);
      setforecast(resp.forecast);
      setlocation(resp.location);
      console.log('current',resp.current);
      console.log('forecast',resp.forecast);
      console.log('location',resp.location);

    }
    catch (error) {
      console.log('error', error)
    }
  }



  return (
    <> 
    <div className='Cloudes'>
    <h4 className="bg bg-primary p-3 d-flex justify-content-center  fw-bold fs-1pos rounded">
        CURRENT WEATHER
      </h4>
      <div className="container bg-primary  p-2 rounded ">
        <input type="text"
        value={Clickedcity}
         className="form-control" 
          onChange={(e) => { setcity(e.target.value)
          if(e.target.value==""){
            setcurrent();
            setforecast();
            setlocation();
            setClickedcity();
          }}} />

        {citySuggestion && citySuggestion.map((city, index) => {
          return (
          <div key={index}
           className='text-center bg-info p-2 text-dark bg-opacity-30 border border-info bg-opacity-50 rounded'
            style={{cursor:'pointer'}}
            onClick={() => handleSelectedCity(city)}>
            {city}
            </div>
          );

          
        })}
      {currentWeather && <Current currentWeather={currentWeather} location={location}/>}
      {forecastWeather && <Forecast forecastWeather={forecastWeather} location={location}/>}
      </div>
      </div>
    
    </>
  )
}

export default App