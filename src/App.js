import React, { Component } from 'react';
// import ForceGraph3D from '3d-force-graph';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';
import logo from './logo.svg';
import './App.css';

const N = 300;
const myData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
};

const testData = {
  "nodes": [
      {
          "id": 0,
          "name": "account_1",
          "value": 10,
          "color": "grey"
      },
      {
          "id": 1,
          "name": "client_10",
          "value": 10,
          "color": "grey"
      },
      {
          "id": 2,
          "name": "advisor_20",
          "value": 15,
          "color": "blue"
      },
      {
          "id": 3,
          "name": "account_2",
          "value": 10,
          "color": "grey"
      }
  ],
  "links": [
      {
          "source": 1,
          "target": 0
      },
      {
          "source": 2,
          "target": 1
      },
      {
          "source": 1,
          "target": 3
      },
      {
          "source": 2,
          "target": 1
      }
  ]
}



// var loadedData = getData();

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: testData
  //   };
  //   this.setDataState = this.setDataState.bind(this);
  // }

  // setDataState() {
  //   console.log('Setting data state on event: ')
  //   fetch('miserables.json', {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then(function(jsonData) {
  //       console.log(jsonData)
  //       this.state.data = jsonData;
  //       // return data;
  //       console.log('data after state' + this.state.data);
  //     })
  //     .catch(function(error) {
  //       console.log(error.message);
  //     });
  // }

  // componentDidMount() {
  //   console.log('component did mount!');
  //   console.log('data before set state: ' + this.state.data)
  //   this.setDataState();
  // }
  // componentDidMount() {
  //   fetch('miserables.json', {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then(function(jsonData) {
  //       console.log(jsonData)
  //       this.state.data = jsonData;
  //       // return data;
  //     })
  //     .catch(function(error) {
  //       console.log(error.message);
  //     });
  //   // console.log('hello world');
  // }

  // fetch('miserables.json').then(res => res.json()).then(data)

  render() {
    // console.log(this.state.data);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="force-graph-wrapper">
          <ForceGraph3D graphData={testData}></ForceGraph3D>
        </div>
      </div>
    );
  }
}

export default App;
