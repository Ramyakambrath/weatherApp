import React,{ useContext, useState , useEffect} from 'react'
import {WeatherContext} from '../context/WeatherContext'
import axios from 'axios'
import useAPIGoogleLocations from '../actions/WeatherActions'

const WeatherContainer=()=>{

    // const {weatherData}= useContext(WeatherContext)
    // const [locationData,setData]=useState([])
    const [weatherData,makeRequest] = useAPIGoogleLocations('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDRFA58riCaud7P_njezcQzrbXYLlgXQqs',
            {
                verb: 'post',
            }
        );
    

    useEffect(() => {

         makeRequest(weatherData)

       
        // async function fetchData(){

        //     const result = await axios.post(
        //         'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDRFA58riCaud7P_njezcQzrbXYLlgXQqs',
        //       );
 
        //     setData(result.data.location)
        //   return result.data.location
        // }
        
        // fetchLocations().then(position=>{
         
        //     // this.loadCurrentWeatherByPosition(position);
        //     // this.loadDailyWeatherByPosition(position);
        //     // this.loadHourlyWeatherByPosition(position);

        // 
         } ,[]);

       


   //   },[]);

//    const loadCurrentWeatherByPosition=(position)=>{
//        return position
//    }

    return(

        <div className="weatherContainer">
            {weatherData.map(data=>
                <li>{data.lat}</li>
            )}
           
        </div>
    )

}

export default WeatherContainer