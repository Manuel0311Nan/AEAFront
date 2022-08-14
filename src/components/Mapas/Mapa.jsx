import React from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";

// eslint-disable-next-line no-undef
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCOq9lrcUwEWXbFkFmI6HUxXf80WuMuqU8",
})(MapContainer);
