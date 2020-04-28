import React from 'react';
import Weather from './weather'

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    description: undefined,
    rain:undefined,
    icon:undefined,
    error: undefined
  }

  handlenum1Change (evt) {
      let temp = (evt.target.value);
        }


 getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;

    const API_KEY='6f8d62adc168a5dd46943741c2af299c'

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        icon: data.weather.icon,
        rain: data.rain,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure:undefined,
        rain : undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">

                </div>
                <div className="col-xs-7 form-container">
                  <form onSubmit={this.getWeather} >

                  <input type="text" name="city" onChange={this.handlenum1Change} placeholder="City..."/>

    <button>Get Weather</button>
    </form>


                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                       pressure={this.state.pressure}
                    description={this.state.description}
                    rain={this.state.rain}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
