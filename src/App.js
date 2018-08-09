import React from "react";
import "./index.css";
import List from "./List";

class App extends React.Component {
  render() {
    //const { CLIENT_ID, CLIENT_SECRET, version } = this.state
    return (
      <div>
        <nav>
          <h1>Budapest - A Város Amely Egysít</h1>
          <br />
          <p>(The City That Unites)</p>
        </nav>
        <List 
          // CLIENT_ID={CLIENT_ID} 
          // CLIENT_SECRET={CLIENT_SECRET}
          // version={version}
          />
      </div>
    );
  }
}

export default App;
