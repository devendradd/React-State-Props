import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ParentComponent from './components/ParentCompoenent';
import SecondParentComponent from './components/SecondParentComponent';

class App extends Component {

  constructor(){
    super();

    this.chanegChildsState = this.chanegChildsState.bind(this);
  }

  chanegChildsState(){
    // this.refs.firstParent.setState()
    console.log(this.firstParent);
    this.firstParent.setState({fruites:[]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <ParentComponent ref={node => this.firstParent = node} />
        <input type="button" value="Manipulate CHilds state" onClick={this.chanegChildsState} />
        </div>
    );
  }
}

export default App;
