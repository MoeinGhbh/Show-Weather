import React from 'react';
import PropTypes from 'prop-types';

const Weather = props =>
  <div>
    <p>{props.city}</p> 

        <p> humidity {props.humidity }</p> 

        <p> {props.description} </p>
    <p> temperature {props.temperature}</p> 
     <p> atmospheric pressure : {props.pressure}</p> 
 <p> atmospheric pressure : {props.rain}</p> 
 <img className="img-fluid" src={props.icon} />
  </div>





export default Weather; 