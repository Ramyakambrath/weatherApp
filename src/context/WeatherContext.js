import React from 'react'
import { useReducer } from 'react'
import {weatherReducer} from '../reducers/weatherReducer'

export const WeatherContext=React.createContext()


export const WeatherContextProvider=(props)=>{


    const [weatherData,dispatch]=useReducer(weatherReducer,[])

    return (
        <WeatherContext.Provider value={{ weatherData, dispatch }}>
          {props.children}
        </WeatherContext.Provider>
      );


}