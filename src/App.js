import React from "react";
import "./index.css";
import List from './List'

class App extends React.Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 47.497912, lng: 19.040235 },
      zoom: 13
    });
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Budapest - A Város Amely Egysít</h1>
          <br />
          <p>(The City That Unites)</p>
        </nav>
        <div className="app-container">
          <List/>
          <section className='map-section'>
          <div id="map" />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
