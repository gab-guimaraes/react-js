import React, { Component } from 'react';
import Feed from './components/feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, username: 'john wick', curtidas: 10, comentarios: 2},
        {id: 2, username: 'scooby-doo', curtidas: 210, comentarios: 24},
        {id: 3, username: 'salsicha', curtidas: 10, comentarios: 184},
        {id: 3, username: 'travis barker', curtidas: 400, comentarios: 7548}
      ]
    }
   }

render() {
  return(
    <div>
       {this.state.feed.map((item) => {
        return(
          <Feed id={item.id} 
          username={item.username}
          curtidas={item.curtidas}
          comentarios={item.comentarios}/>
        );
      })}
      
    </div>
  )
}
}

export default App;