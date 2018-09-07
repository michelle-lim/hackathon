import React, { Component } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import logo from './Riskalyze2016.svg';
import './App.css';

const testData = {
    "nodes": [ 
        { 
          "id": "id1",
          "name": "name1",
          "val": 1 
        },
        { 
          "id": "id2",
          "name": "name2",
          "val": 10 
        }
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2"
        }
    ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testData
    };
    this.fetchData = this.fetchData.bind(this);
    this.updateDataOnClick = this.updateDataOnClick.bind(this);
  }

    fetchData(self, fileName) {
        fetch(fileName,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(function(jsonData) {
            // getting hacky for the hackathon
            console.log("setting state...");
            self.setState({ data: jsonData });
        })
        .catch(function(error) {
            console.log("error occured.");
            console.log(error.message);
        });
    }

    updateDataOnClick(e) {
        console.log("debug...");
        console.log(e.target);
        console.log('e.target.value: ' + e.target.value);
        this.fetchData(this, e.target.value);
    }

    componentDidMount() {
        // After initial load, fetch default data
        this.fetchData(this, 'advisor1.json');
    }

    render() {
        const { data } = this.state.data;
        return (
            <div className="App">
                <div>
                <ul id='dropdown1' class='right dropdown-content'>
                        <li><button href="#!" onClick={this.updateDataOnClick} className='dropdown-btn waves-effect waves-light btn btn-small btn-flat rsk-nav-item' value='advisor1.json'>Advisor 1</button></li>
                        <li><button href="#!" onClick={this.updateDataOnClick} className='dropdown-btn waves-effect waves-light btn btn-small btn-flat rsk-nav-item' value='advisor1.json'>Advisor 2</button></li>
                        <li><button href="#!" onClick={this.updateDataOnClick} className='dropdown-btn waves-effect waves-light btn btn-small btn-flat rsk-nav-item' value='advisor1.json'>Advisor 3</button></li>
                    </ul>
                <nav>
                <div class="nav-wrapper">
                    <a href="https://pro.riskalyze.com" class="brand-logo">
                        <img src={logo} className="rsk-logo" alt="Riskalyze" />
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li><a class="dropdown-trigger rsk-nav-item" href="#!" data-target="dropdown1">Select Advisor<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                    
                </div>
                </nav>
                </div>
                <div className="force-graph-wrapper">
                    <ForceGraph3D 
                        graphData={this.state.data}
                        backgroundColor="#E8EBEE">
                    </ForceGraph3D>
                </div>
            </div>
            );
        }
    }

export default App;
