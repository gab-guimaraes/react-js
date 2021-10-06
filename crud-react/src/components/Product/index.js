import { Component } from "react";

class FormProduct extends Component {
  render() {
    return (
      <div>
        <h2 className="font-weight-bold text-center"> cadastro de produtos </h2>
      </div>      
    )
  }
}

class ListProduct extends Component {
  render() {
    return (
      <div>
        <h2 className="font-weight-bold text-center"> list de produtos </h2>
      </div>      
    )
  }
}

export default class ProductBox  extends Component {
  
  Url = 'mywebsite'
  state = {
    products: [],
  }

  componentDidMount() {
    fetch(this.Url)
    .then(response => response.json())
    .then(products => console.log(products))
    .catch(e => console.log(e));

  }
  
  //https://youtu.be/lJsgUOj73zg?t=957
  render() {
    return (
      <div className="row">
      <div className="col-md-6">
        <FormProduct/>
      </div>
      <div className="col-md-6">
        <ListProduct/>
      </div>
    </div>
    );
  } 
}