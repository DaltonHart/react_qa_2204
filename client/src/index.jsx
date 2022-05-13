import React from "react";
import reactDOM from "react-dom";

import List from "./components/Band/List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Page: List,
      id: null,
    };
  }

  handlePageChange = (Page, id = null) => {
    this.setState({
      Page: Page,
      id: id,
    });
  };

  render() {
    const { Page, id } = this.state;

    return (
      <div className='App'>
        <h1>Spoofy</h1>
        <Page handlePageChange={this.handlePageChange} id={id} />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById("root"));
