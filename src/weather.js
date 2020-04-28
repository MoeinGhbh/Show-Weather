import React from 'react';
import PropTypes from 'prop-types';

const Weather = props =>
  <div>
    <p> Country: {props.country}</p> 
    <p> City: {props.city}</p> 

        <p> humidity {props.humidity }</p> 

        <p> {props.description} </p>
    <p> temperature {props.temperature}</p> 
     <p> atmospheric pressure : {props.pressure}</p> 
 <p> rain : {props.rain}</p> 
 <img className="img-fluid" src={props.icon} />
  </div>





export default Weather; 