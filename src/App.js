import React from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer'

import {WeatherContextProvider} from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherContainer/>
      </WeatherContextProvider>
    
    </div>
  );
}

export default App;
