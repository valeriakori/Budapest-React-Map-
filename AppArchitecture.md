## App Architecture


src
   
   utils/
   
     GoogleAPI.js
       state = 
       {
          googleMapsAPIKey: '479ZS92'
          map: new window.google.maps.Map(anchor, mapConfig),
          mapConfig: {
            center:,
            zoom:13
          }
          places: [
            { name: 'Work',
              subtitle: 'The place with free coffee and bad WiFi'
              location: { lat: 567, lng: 829 },
              requestID: 08000815
            },
            {
             // All places
            }
          ],
          
          markers: [// After initial componentMount this array will contain all markers
                    // In every following call it will return a filtered or reseted array]
       }


       
       { export 
         getAll () => this.state.places
         getMap () => Map API call
         getMarkers (value) => returns marker array filtered for includes(value) or initial state
         getPlaces (value) => returns places array filtered for includes(value) or initial state
       }
       
       FoursquareAPI.js
         state = {
           crededentials: {
             clientId:123,
             clientSecret:876,
             version:20200813
           }
         }
         
         export
           getImage(id) => fetch("urlToFetch${id}&client-id=${this.state.cred.clientId&...youGetThePoint}")
           getDescription(id) => fetch("same same..but diffrent...but still same")
           
   components/
   
     **App.js** 
     
       import List, Map

       render()
         <div>
         
           <nav />
           
           <div id=appContainer
             <List />
             <Map />
           </div>
           
         </div>

     List.js
     state = {
       filteredPlaced: []
     }
       import getPlaces, getAll from GoogleAPI
       
       handleQuery = (query) => ()
         if (query)
           getPlaces() // Filtered for query
           setState(filteredPlaces)
       }
       render()
         <div className='list-section'>
           <input onChange={handleQuery} /> //handleQuery calls
           <ul>
             (filteredPlaces.length > 0 &&
             filteredPlaces.map(place => <ListItem props/> )
             places.map(place => <ListItem props/>)
           </ul>
         </div>
         
     ListItem.js
     
     render()
       <li>
         h3: ${name}  h4: ${subtitle}
       </li>
         
     Map.js
       import getMarkers, getMap from GoogleAPI
       
       Karte und Marker initieren
       
       Puuuh, hier wird es etwas kompliziert für mich, da ein wert in List.js verändert wird, 
       der Auswirkung auf die Darstellung der Marker hat...
       
       clickhandeling -> send request to FoursquareAPI and recieve returned value in order to render infoWindow
         
