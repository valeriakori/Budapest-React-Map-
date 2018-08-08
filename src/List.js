import React, { Component } from 'react';

class List extends Component {
  state = {
    map: '',
    query: '',
    markers: [],
    infoWindow: new window.google.maps.InfoWindow(),
    animate: window.google.maps.Animation,
    places: [
      {
        name: 'Casa Baja',
        location: { lat: 47.509154, lng: 19.0548838 },
        title:
          'My home for 3 months during which I wrote my first lines of HTML and CSS'
      },
      {
        name: 'Linguarum',
        location: { lat: 47.5175433, lng: 18.8890769 },
        title:
          'The place that inspired me to start coding. 11/10, would intern again there'
      },
      {
        name: 'Erzsébet-kilátó',
        location: { lat: 47.5182885, lng: 18.9592638 },
        requestId: '4e07708a81dc6d6d36a5ecdb'
      },
      {
        name: 'Gellért-hegy',
        location: { lat: 47.483736, lng: 19.037055 },
        requestId: '4e07708a81dc6d6d36a5ecdb'
      },
      {
        name: 'Szimpla Kert',
        location: { lat: 47.497013, lng: 19.063314 },
        requestId: '4b630e1af964a52020602ae3'
      },
      {
        name: 'Hősök Tere',
        location: { lat: 47.514943, lng: 19.077863 },
        requestId: '4b6c6ae5f964a52082382ce3'
      },
      {
        name: 'Margitsziget',
        location: { lat: 47.527607, lng: 19.04696 },
        requestId: '4bb25b49a32876b0dc7d00fe'
      },
      {
        name: 'Országház',
        location: { lat: 47.507121, lng: 19.045669 },
        requestId: '4bd6e74b5631c9b63889a630'
      }
    ]
  };

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 47.497912, lng: 19.040235 },
      zoom: 13
    });

    this.makeMarkers();
  };

  makeMarkers = () => {

    const { infoWindow, animate, markers } = this.state

    //Display markers on the map
    let marker = this.state.places.forEach(place => {
      place.marker = new window.google.maps.Marker({
        position: place.location,
        map: this.map,
        title: place.name,
        animation: animate.DROP
      });

      markers.push(place.marker);

      //Add onClick Animation
      place.marker.addListener('click', () => {
        if (place.marker.getAnimation() !== null) {
          place.marker.setAnimation(null);
        } else {
          place.marker.setAnimation(animate.BOUNCE);
          setTimeout(() => {
            place.marker.setAnimation(null);
          }, 750);
        }
      });

      //Display InfoWindow
      place.marker.addListener('click', () => {
        infoWindow.setContent(place.name)
        infoWindow.open(this.map, place.marker)
      });

      //place.marker.addListener('click', this.populateInfoWindow(e));
    });

  };

  populateInfoWindow = (e) => {
    const {infoWindow, places, markers} = this.state


    let selectedPlace = places.findIndex(place => place.name === e.target.innerText)

    infoWindow.setContent(places[selectedPlace].name)
    infoWindow.open(this.map, markers[selectedPlace])
    console.log(places[selectedPlace])

    // infowindow.addListener('closeclick', function() {
    //   infowindow.marker = null;
    // });
  }

  handleQuery = (query) => {
    this.setState({ query:query })
  }

  updatePlaces = () => {
    const { query, places } = this.state
    let displayedPlaces
    if (query) {
      displayedPlaces = places.filter(place => place.name.includes(query))
      console.log(displayedPlaces)

      this.setState({ places:displayedPlaces })
      this.makeMarkers();
    } else {
      this.setState({query:''})
      this.setState({places})
      this.makeMarkers();
    }
  }

  render() {
    const { places } = this.state;
    
    return (
      <div className='app-container'>
        <section className='list-section' role='list of places in budapest'>
          <input onChange={e => this.handleQuery(e.target.value)} placeholder='Search for Location' />
          <ul>{places.map((place, i) => <li onClick={e => this.populateInfoWindow(e)} key={i}>{place.name}</li>)}</ul>
        </section>

        <section className='map-section'>
          <div id='map' />
        </section>
      </div>
    );
  }
}
export default List;
