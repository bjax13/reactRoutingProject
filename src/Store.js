import React from 'react';
import axios from 'axios';

class Store extends React.Component {
  componentDidMount(){
    console.log("Mounted to the DOM");
  }
  render() {
    return (
      <div className="store">
        <h1> Store Page </h1>
      </div>
    )
  }
}

export default Store;
