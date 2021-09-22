import React, { Component } from 'react';


class Equipe extends Component {
  render() {
    return(
      <div>
        <h2>hi, i'm { this.props.nome }</h2>
        <h3>position: { this.props.cargo } </h3>
        <h3>age: {this.props.age } </h3>
      </div>
    )
  }
}

function App() {
  return(
    <div>
      <h1>Conhecendo a equipe</h1>
      <Equipe nome="Lucifer" cargo="Deus do Inferno" age="22"/>
    </div>
  );
}
//export default App;