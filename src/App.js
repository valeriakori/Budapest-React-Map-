import React from "react";
import "./index.css";
import List from "./List";

class App extends React.Component {

  state = {
    map: ''
  }
  componentDidMount() {

    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 47.497912, lng: 19.040235 },
      zoom: 13
    })



    // marker.addListener('click', () => infoWindow.open(map, marker))

    // marker.addListener('click', () => {
    //   if (marker.getAnimation() !== null) {
    //     marker.setAnimation(null);
    //   } else {
    //     marker.setAnimation(window.google.maps.Animation.BOUNCE);
    //     setTimeout(() => { marker.setAnimation(null); }, 750);
    //   }
    // });

    
    this.setState({ map: map })


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
          <List map={this.state.map}/>
          <section className="map-section">
            <div id="map" />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
