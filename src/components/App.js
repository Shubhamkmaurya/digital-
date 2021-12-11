import React {Component, useState} form "react";
import React from 'react'

 
  
  class App extends Component {
    constructor() {
      super();
      this.state = {time : new Date() };
    }
   currentTime() {
     this.setState({time: new Date() });
   }
    componentDidMount () {
    this.interval = setInterval(() => this.currentTime(), 1000);}
  }
  componentWillUnmount() {
    clearInterval = (this.Interval);
  }
  render(){
     return (
    
      <div className="date-time">
       <h2 id="time">{this.state.time.toLocaleString()} </h2>
       </div>
  );
}

 

export default App;
