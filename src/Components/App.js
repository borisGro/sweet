import React, { Component } from 'react';
import '../Styles/App.css'
import Card from './Card'
import DataFetcher from './DataFetcher'


import kels from '../kels.jpg'
import headshot from '../headshot.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
      <DataFetcher />

       <Card
       name= "Boris Grodzovsky"
       avatar= {headshot}
       message= "Hey, what's up? I have built this mock app!"
       />

      <DataFetcher />

      <Card 
      name= "Kelsey Grodzovsky"
      avatar= {kels}
      message= "Life is good!"
      />
      </div>
    );
  }
}

export default App;
