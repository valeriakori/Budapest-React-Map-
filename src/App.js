import React from "react";
import "./index.css";
import List from "./List";

class App extends React.Component {

  state = {
    CLIENT_ID: "VPTQVDF2IZ4WXJE01KPUJEOPQLY3F1GSLYBTAV2IEWD5UBUY",
    CLIENT_SECRET: "M1KN4D4LCNH5Q1XGEPKLO3P125YQH3JNYTL4VQJJZIR0SCE1",
    version: 20180809
  };
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
