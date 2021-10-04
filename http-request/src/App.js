import React, { Component } from 'react';

//http://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: []
    }
  }

  componentDidMount(){
    let url = 'https://jsonplaceholder.typicode.com/posts'; 
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      let state = this.state;
      state.nutri = json;
      this.setState(state);
      console.log(json);
    });
  }

  render() {
    return(
      <div className="container">
        {this.state.nutri.map((item)=> {
          return(
            <article key={item.id}>
              <strong> {item.title} </strong>
              <p> {item.body} </p>
              </article>
          );
        })}

      </div>
    )
  }
}

export default App;