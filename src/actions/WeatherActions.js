import axios from 'axios'
import {WeatherContext} from '../context/WeatherContext'
import React,{ useContext, useState , useEffect} from 'react'




const useAPIGoogleLocations=(endpoint, { verb = 'post', params = {} }={})=>{
    const {weatherData,dispatch}= useContext(WeatherContext)
  
    const makeRequest = async () => {
   
        try {
            const response = await axios[verb](endpoint, params);
            dispatch({
                type:'GET_CURRENT_POSITION',
                payload:response.data.location
            })
        } 
        catch (e) {
           // dispatch(error(e));
           console.log(e)
        }
    };
   return [weatherData,makeRequest]
}

export default useAPIGoogleLocations