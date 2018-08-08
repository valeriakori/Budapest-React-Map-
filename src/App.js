import React from "react";
import "./index.css";
import List from "./List";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Budapest - A Város Amely Egysít</h1>
          <br />
          <p>(The City That Unites)</p>
        </nav>
        <List />
      </div>
    );
  }
}

export default App;
