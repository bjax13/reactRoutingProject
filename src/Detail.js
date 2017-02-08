import React from 'react';
import axios from 'axios';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      product:{}
    };

  }

  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/products/' + this.props.params.id)
    .then(res => {
      this.setState({
        product: res.data
      });
    });
  }


  render() {
    return (
      <div>
        <h1> Detail Page !!!</h1>
        <img src = {this.state.product.image} />
        <h1> {this.state.product.title}</h1>
        <p> {this.state.product.price}</p>
        <p> {this.state.product.desc}</p>

      </div>
    )
  }
}

export default Detail;
