import React from 'react';

const BemVindo = (props) => {
  return (
    <div> 
      <h2>Bem Vindo(a) {props.nome} </h2>
    </div>);
};

function App() {
  return(
    <div>
      Olá mundo
      <BemVindo nome="Matheus"/> 
      <BemVindo nome="Gabriel"/> 
    </div>
  );
}
export default App;