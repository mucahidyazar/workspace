import React from 'react';

import './App.css';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather';
import Form from './components/form';

// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = 'c81ef352efe552ec7cde6054c92a15c0';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    }

    this.weatherIcon = {
      Thunderstorm : "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  getWeatherIcon(rangeID){
    if(rangeID <= 200 && rangeID <= 232){
      this.setState(() => ({ icon: this.weatherIcon.Thunderstorm }))
    } else if (rangeID <= 300 && rangeID <= 321){
      this.setState(() => ({ icon: this.weatherIcon.Drizzle }))
    } else if (rangeID <= 500 && rangeID <= 531){
      this.setState(() => ({ icon: this.weatherIcon.Rain }))
    } else if (rangeID <= 600 && rangeID <= 632){
      this.setState(() => ({ icon: this.weatherIcon.Snow }))
    } else if (rangeID <= 700 && rangeID <= 781){
      this.setState(() => ({ icon: this.weatherIcon.Atmosphere }))
    } else if (rangeID === 800){
      this.setState(() => ({ icon: this.weatherIcon.Clear }))
    } else if (rangeID === 801){
      this.setState(() => ({ icon: this.weatherIcon.Clouds }))
    }
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim() ? e.target.elements.city.value.trim() : 'Istanbul'
    const country = e.target.elements.country.value.trim() ? e.target.elements.country.value.trim() : 'TR'
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);
    this.setState(() => ({ 
      city: response.name, 
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description
    }));

    this.getWeatherIcon(response.weather[0].id);
    
  }

  render(){
    return (
      <div className="App">

        <Form
          loadWeather={this.getWeather}
          error={this.state.error}
        />

        <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon}
        />

      </div>      
    )
  }
}

export default App;