import React, { Component } from 'react';
// import ForceGraph3D from '3d-force-graph';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';
import logo from './logo.svg';
import './App.css';

// const N = 300;
// const gData = {
//   nodes: [...Array(N).keys()].map(i => ({ id: i })),
//   links: [...Array(N).keys()]
//     .filter(id => id)
//     .map(id => ({
//       source: id,
//       target: Math.round(Math.random() * (id-1))
//     }))
// };

// const Graph = ForceGraph3D()
//       (document.getElementById('3d-graph'))
//         .graphData(gData);

class App extends Component {
  render() {
    console.log(ForceGraph3D);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


      </div>
    );
  }
}

export default App;
