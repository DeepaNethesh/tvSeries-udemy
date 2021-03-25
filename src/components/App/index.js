import React, { Component } from 'react'
// import Series from '../../containers/series'
import Main from '../Main'
import '../App/App.css';
import 'whatwg-fetch';
class App extends Component {
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='App-title'>TV Series List</h1>
      </header>
       {/* <Intro message='Here you can find all of your most loved series' /> */}
      <Main />
    </div>
  );
}
}
export default App;
