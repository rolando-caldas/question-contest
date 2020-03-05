import React from "react";
import axios from 'axios';

class Contest extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      contests: null
    };
  }

  componentDidMount = () => {
    axios.get('http://localhost:8082/contest')
      .then(response => {this.setState({contests : response.data.data})})
      .catch(error => {this.setState({contests : error})});
  };

  render() {
    return (<div>dd</div>);
  }
}

export default Contest;