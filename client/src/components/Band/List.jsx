import React from "react";

import axios from "axios";

import Show from "./Show.jsx";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bands: [],
    };
  }

  componentDidMount() {
    console.log("did mount");
    this.fetchBands();
  }

  fetchBands = () => {
    axios
      .get("/api/v1/bands")
      .then(response => {
        console.log(response);
        this.setState({
          bands: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    console.log("renderer");
    const { bands } = this.state;

    return (
      <div className='List'>
        <h2>List</h2>

        {bands.length > 0 ? (
          bands.map(band => (
            <p onClick={() => this.props.handlePageChange(Show, band.band_id)}>
              {band.name}
            </p>
          ))
        ) : (
          <p>No Bands Available at this time.</p>
        )}
      </div>
    );
  }
}

export default List;
