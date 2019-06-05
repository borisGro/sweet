import React, { Component } from 'react';
import Card from './Card';
import white from '../white.jpg';

class Loader extends Component {
  render() {
    return (
      <div className="App">
       <Card
       name= {'Fetching...'}
       avatar= {white}
       message= {'Fetching...'}
       />

      </div>
    );
  }
}

export default Loader;
