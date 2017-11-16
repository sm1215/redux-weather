import axios from 'axios';

import Secrets from '../secrets';

//Get an api key for free at http://openweathermap.org (Well, almost free. Need to signup for an account)
const API_KEY = Secrets.API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Use a single variable to hold the action type for consistentcy across the entire application
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`; //Just using a static country code for now

  //Using axios (small library) to make AJAX requests, very similar to jQuery's method
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}