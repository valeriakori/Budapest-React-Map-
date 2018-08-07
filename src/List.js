import React, { Component } from "react";

class List extends Component {
  state = {
    query: '',
    markers: [],
    places: [
      {
        name: 'Casa Baja',
        location: { lat:47.509154, lng:19.0548838 },
        title: 'My home for 3 months during which I wrote my first lines of HTML and CSS'
      },
      {
        name: 'Linguarum',
        location: { lat:47.5175433, lng:18.8890769 },
        title: 'The place that inspired me to start coding. 11/10, would intern again there'
      },
      {
        name: 'Erzsébet-kilátó',
        location: { lat:47.5182885, lng:18.9592638 },
        requestId: 'erzsébetkilátó'
      },
      {
        name: 'Gellért-hegy',
        location: { lat:47.483736, lng:19.037055 },
        requestId: 'gellérthegy'
      },
      {
        name: 'Szimpla Kert',
        location: { lat:47.497013, lng:19.063314 },
        requestId: 'szimpla-kert'
      },
      {
        name: 'Hősök Tere',
        location: { lat:47.514943, lng:19.077863 },
        requestId: 'hősök-tere--heroes-square'
      },
      {
        name: 'Margitsziget',
        location: { lat:47.527607, lng:19.04696 },
        requestId: 'margitsziget'
      },
      {
        name: 'Országház',
        location: { lat: 47.507121, lng:19.045669 },
        requestId: 'parlament'
      },
    ]
  }

  componentDidMount() {
    this.state.places.forEach(place => {
      place.marker = new window.google.maps.Marker({
        position: {lat: place.location.lat, lng: place.location.lng},
        map: this.props.map,
        title:place.name,
        animation: window.google.maps.Animation.DROP
      })
    });
  }

  render() {
    const {places} = this.state
    return (
      <section className="list-section" role="list of places in budapest">
        <input placeholder="Search for Location" />
        <ul>
          {places.map( place => <li key={place.requestId}>{place.name}</li>)}
        </ul>
      </section>
    );
  }
}
export default List;
