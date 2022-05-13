import React from "react";
import axios from "axios";

import List from "./List.jsx";

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      band: null,
    };
  }

  componentDidMount() {
    this.fetchABand();
  }

  fetchABand = () => {
    axios
      .get(`/api/v1/bands/${this.props.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          band: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { band } = this.state;
    return (
      <div className='Show'>
        <h2>Show</h2>
        <button onClick={() => this.props.handlePageChange(List)}>
          Go to List
        </button>

        <p>{band ? band.name : "Loading...."}</p>
      </div>
    );
  }
}

export default Show;
