import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'

const divstyle = {
  margin: "1px",
  height: "15px",
  width: "15px",
  color: "white",
  borderColor: "black",
  borderStyle: "solid",
}

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tile>F</Tile>
        <Tile />
        <Tile />
      </React.Fragment>
      )
  }
};

class Tile extends React.Component {
  render() {
    return <div className = "tile" style = {divstyle}>{this.props.children}</div>;
  }
};



function App() {
  return (
    <div className="App">
      Hello, folks
      <Map>
      </Map>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))