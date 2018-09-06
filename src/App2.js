import React, { Component } from 'react';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testData
    };
  }

    _fetchData(self, fileName) {
        fetch(fileName,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(function(jsonData) {
            // getting hacky for the hackathon
            self.setState({ data: jsonData })
        })
        .catch(function(error) {
            console.log("error occured.")
            console.log(error.message);
        });
    }

    componentDidMount() {
        // After initial load, fetch default data
        var test = this._fetchData(this, 'advisor3.json');
    }

    
      
    render() {
        const { data } = this.state.data;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Hello World!</h1>
                </header>
                <div>
                    <button>Advisor 1</button>
                    <button>Advisor 2</button>
                </div>
                <div className="force-graph-wrapper">
                    <ForceGraph3D 
                        graphData={this.state.data}
                    >
                    </ForceGraph3D>
                </div>
            </div>
            );
        }
    }

export default App;
