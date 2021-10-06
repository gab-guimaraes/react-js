import { Component } from "react";
import './App'
import Header from "./components/Headers";
import ProductBox from "./components/Product";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Products app"/>
        <br />
      <ProductBox/>
      </div>
    );
  }
}

export default App;