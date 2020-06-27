import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import GetCity from './Components/GetCity';
import Result from './Components/Result';
import Particles from 'react-particles-js';
import Logo from './Components/Logo';
import Snow from 'react-snow-effect';
const ApiKey="2167f2df60ba36b6ecdcb300c0e4167c";

const particlesOptions = {
  particles :  {
    number :{
      value:150,
      density :{
        enable:true,
        value_area:1000
      }
    }
  }
}

const initialState ={
  input:'',
  CityName:'',
  isValid: true,
  temp: 0,
  climate:'',
  weather:'',
  icon: '',
  color: ''
}


class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }
  onCitySubmit = (event) => {
    this.setState({CityName:this.state.input});
    this.fetchWeatherData(this.state.input);         
  }
  onCityEnter = (event) =>{
  if(event.key==='Enter'){
    this.setState({CityName:this.state.input});
    this.fetchWeatherData(this.state.input);      
  }
  }
  fetchWeatherData =  (name) => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${ApiKey}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
      else {
         throw  new Error("Invalid City");
      }
    }).then(dt=>{
      this.setState({isValid:true});
      this.setState({
                temp: (dt.main.temp).toFixed(2),
                weather: dt.weather[0].icon,
                climate: dt.weather[0].description,
                CityName: dt.name
    })
    this.setAnimationDetails(this.state.weather);   
  }).catch(err=>{
    this.setState({isValid:false});
    });
  }

setAnimationDetails = (weather) =>{
  
if(weather==='04d'||weather==='04n'){
     this.setState({
      icon: 'CLOUDY',
      color: 'skyblue'})
  }
  else if(weather==='02d'||weather==='03d'){
       this.setState({
        icon: 'PARTLY_CLOUDY_DAY',
        color: 'skyblue'})
    }
    else if(weather==='02n'||weather==='03n'){
      this.setState({
       icon: 'PARTLY_CLOUDY_NIGHT',
       color: 'skyblue'})
   }
   else if(weather==='01d'){
    this.setState({
     icon: 'CLEAR_DAY',
     color: 'goldenrod'})
 }
 else if(weather==='01n'){
  this.setState({
   icon: 'CLEAR_DAY',
   color: 'black'})
}
else if(weather==='09d'||weather==='10d'||weather==='11d'||weather==='09n'||weather==='10n'||weather==='11n'){
  this.setState({
   icon: 'RAIN',
   color: 'skyblue'})
}
else if(weather==='13d'||weather==='13n'){
  this.setState({
   icon: 'SNOW',
   color: 'skyblue'})
}
else if(weather==='50d'||weather==='50n'){
  this.setState({
   icon: 'FOG',
   color: 'skyblue'})
}
  else{
    console.log(weather,'hehe');
    this.setState({
      icon: 'CLEAR_DAY',
      color: 'goldenrod'})  
  }
 
}

  render(){
  return (
    <div className="App">
      <Particles className='particle'
      params={particlesOptions}
      />
      <Snow/>
      <Navigation/>
      <Logo/>
      <GetCity 
        onInputChange={this.onInputChange} 
        onCitySubmit={this.onCitySubmit} 
        onCityEnter={this.onCityEnter}/>
      <Result 
        cityName = {this.state.CityName}
        temp={this.state.temp} 
        climate={this.state.climate} 
        icon={this.state.icon} 
        color={this.state.color} 
        validCity={this.state.isValid}/>
    </div>
  );
}
}

export default App;
