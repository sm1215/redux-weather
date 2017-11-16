import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';

//This application introduces Middleware.
//Middleware fits into the app flow like this:
//1. User Interacts with application
//2. This calls an Action Creator 
//3. Action Creator returns an Action
//4. Action is intercepted by Middleware
//5. Middleware can either let the Action pass, manipulate it, log it, or stop the Action
//6. If Action is passed, it goes to a Reducer
//7. Reducer processes the Action and updates the application State

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
