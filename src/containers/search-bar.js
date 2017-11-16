import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    //Set the proper context for the onInputChange event
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //Using the fetchWeather action to send a request, which updates state
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' }); //Clear the input on submit
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

//Don't need state here so we can pass null as the first argument
export default connect(null, mapDispatchToProps)(SearchBar);