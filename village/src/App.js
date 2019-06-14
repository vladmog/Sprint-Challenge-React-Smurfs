import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom';
import OneSmurf from './components/OneSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err));
  }

  submitSmurf = (smurf) => {
    let url = 'http://localhost:3333/smurfs'
    axios.post(url, smurf)
    .then(res => (
      this.setState({
        smurfs: res.data
      })
    ))
    .catch ()
  }

  smurfKiller = (e, id) => {
    e.preventDefault()
    axios.delete (`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch()
  }

  updateHandler = (id, data) => {
    axios.put (`http://localhost:3333/smurfs/${id}`, data)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch()
  }

  render() {
    return (
      <div className="App">
        <div className = "navBar">
          <NavLink to = "/">Smurfs  </NavLink>
          <NavLink to = "/smurf-form">Form</NavLink>
        </div>
        <Route path = "/smurf-form" render = {props => <SmurfForm smurfs = {this.state.smurfs} submitSmurf = {this.submitSmurf} {...props} />} />
        <Route exact path = "/" render = {props => <Smurfs smurfs = {this.state.smurfs} smurfKiller = {this.smurfKiller} />} />
        <Route path = "/smurf/:id" render = {(props) => <OneSmurf {...props} smurfs = {this.state.smurfs} updateHandler = {this.updateHandler}/>} /> 
      </div>
    );
  }
}

export default App;
