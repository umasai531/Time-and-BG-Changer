import React, {Component} from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Color from './components/Color'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Welcome/>
       <Color/>
      </div>
    );
  }
}
export default App;
