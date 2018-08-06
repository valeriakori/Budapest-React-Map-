import React from "react";

import "./index.css";

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
          <section className='list-section' role="list of places in budapest">
            <input placeholder='Search for Location'/>
            <ul>
              <li>numoro 1</li>
              <li>numoro 3</li>
              <li>hier ist 5.</li>
              <li>das ist kiko</li>
              <li>numoro 1</li>
              <li>numoro 3</li>
              <li>hier ist 5.</li>
              <li>das ist kiko</li>
              <li>numoro 1</li>
              <li>numoro 3</li>
              <li>hier ist 5.</li>
              <li>das ist kiko</li>
              <li>numoro 1</li>
              <li>numoro 3</li>
              
              <li>das ist kiko</li>
              <li>numoro 1</li>
              <li>numoro 3</li>
              <li>hier ist 5.</li>
              <li>das ist kiko</li>
            </ul>
          </section>
          <section className='map-section'>
          <div id="map" />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
