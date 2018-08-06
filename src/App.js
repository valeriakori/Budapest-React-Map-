import React from "react";
import "./index.css";
import List from "./List";

class App extends React.Component {
  componentDidMount() {

    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 47.497912, lng: 19.040235 },
      zoom: 13
    })

    let casaBaja = { lat: 47.509154, lng: 19.055431 }

    let marker = new window.google.maps.Marker({
      position: casaBaja,
      map: map,
      animation: window.google.maps.Animation.DROP,

      title: 'first marker'
    })

    let infoWindow = new window.google.maps.InfoWindow({
      content: marker.position.toString()
    })

    marker.addListener('click', () => infoWindow.open(map, marker))

    marker.addListener('click', () => {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => { marker.setAnimation(null); }, 750);
      }
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
          <List />
          <section className="map-section">
            <div id="map" />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
