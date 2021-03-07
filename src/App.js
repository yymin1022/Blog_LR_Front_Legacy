import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      str: null
    }
  }

  componentDidMount(){
    fetch('https://blog-api.defcon.or.kr')
      .then(res => res.json())
      .then(data => this.setState({str: data.str}));
  }

  render(){
      
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.str? <h1>{this.state.str}</h1>: <h1>Loading...</h1>}
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
      </div>
    );
  }
}

export default App;