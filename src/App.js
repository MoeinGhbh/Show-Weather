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

  

  handlenum1ChangeLat(e2){
    let lat = (e2.target.value)
  }

  handlenum1ChangeLon(e1){
    let lon = (e1.target.value)
  }


 getWeather = async (e) => {
    e.preventDefault();
    console.log(e.target.lat.value)
    console.log(e.target.lon.value)


    const lat = e.target.lat.value
    const lon = e.target.lon.value

    const appid='6f8d62adc168a5dd46943741c2af299c'

    //     Parameters:
    // appid - personal API key
    // lat, lon - coordinates of the location of your interest (latitude/longitude)
    

  

   
    

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${appid}&lat=${lat}&lon=${lon}`);
    const data = await api_call.json();
    console.log(data.cod,'status of rersult call API')
    console.log(data,'status of rersult call API')
   

    if (data.cod==200) {
      this.setState({
        // temperature: data.main.temp,
        city: data.city.name,
        country:data.city.country,
        rain: data.list[0].main.rain,
        pressure:  data.list[0].main.pressure,
        humidity:  data.list[0].main.humidity,
        // description: data.weather[0].description,
        // description: data.list[0].clouds,
        temperature: data.list[0].main.temp,
        error: ""
      });
    } else
    
    {
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
      alert('City is not vali')
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

                  {/* <input type="text" name="city" onChange={this.handlenum1Change} placeholder="City..."/> */}


                  <p>Get the weather By geographic coordinates</p>
                  <label>Lat</label>
                  <input type="text" name='lat' onChange={this.handlenum1ChangeLat} />
                  <label>Lon</label>
                  <input type="text" name='lon' onChange={this.handlenum1ChangeLon} />

                  


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
                    country={this.state.country}
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
