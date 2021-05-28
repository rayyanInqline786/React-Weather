import './App.css';
import React,{Component, useEffect, useState} from 'react';
import UserInput from './Component/UserInput';
import WeatherCard from './Component/WeatherCard';
import axios from 'axios';
import './Component/Style/style.css';


class App extends Component{
  state={
    temp:'-',
    humidity:'-',
    feelsLike:'-',
    main:"-",
    description:"-",
    city:"-",
    country:"-",
    photo:"https://images.unsplash.com/photo-1543226862-39202f29696f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  }

  render(){
    const apiCall = (cityName)=>{
    axios('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=94ab2eed0b08a6d02d4f181f574c3dcd')
    .then((response)=>{
      this.setState({
        temp:response.data['main']['temp'],
        humidity:response.data['main']['humidity'],
        feelsLike:response.data['main']['feels_like'],
        main:response.data['weather'][0]['main'],
        description:response.data['weather'][0]['description'],
        city:response.data['name'],
        country:response.data['sys']['country']
      })
      // console.log(this.state)
    })
    .catch(err=>console.log(err))
  }

  const apiPicCall = (cityName) =>{
    axios(`https://api.unsplash.com/search/photos?query=${cityName}&orientation=landscape&client_id=GpApbLXJfy_7CKbOU1QJUiVLCM-Zi61puFA5mT3I6-g`)
    .then((response)=>{
      console.log(response.data['results'][0]['urls']['raw'])
      this.setState((current)=>({
        ...current,
        photo:response.data['results'][0]['urls']['raw']
      }))  
    })
    .catch(err=>console.log(err))

  }


    return(
      <div>
        {/* <img src='https://images.unsplash.com/photo-1569212080670-49fab13e148d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYXRoZXJ8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' /> */}
      <div className="container mt-5">
        <div className="row main-cont">
          <div className="col-lg-6">
      <UserInput apiCall={apiCall} apiPicCall={apiPicCall}/>
      <WeatherCard temp={this.state.temp} city={this.state.city} country={this.state.country} main={this.state.main} description={this.state.description} feelsLike={this.state.feelsLike} humidity={this.state.humidity}/>
    </div>
    <div className="col-lg-6">
      <img src={this.state.photo} />
    </div>
    </div>
    </div>
    </div>
    )
  }
}

export default App;
