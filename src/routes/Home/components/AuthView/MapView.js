import React  from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as haritaData from "./harita.json";


//harita.json isimli sayfada capsulelerin konumları bulunmaktadır.Bu fondksyonda bu verileri çekiyoruz..
function Map() {

  
  return (
    <GoogleMap
      defaultZoom={6.23}
      defaultCenter={{ lat: 38.73122, lng: 35.478729 }}>
      {haritaData.features.map(harita => (
        <Marker
          key={harita.properties.HARITA_ID}
          position={{
            lat: harita.geometry.coordinates[1],
            lng: harita.geometry.coordinates[0]
          }}
         
        

        />
      ))}
     
      )}

    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
// Haritanın boyutunu ayarlıyoruz.ve google haritasını getiriyoruz.
// container haritanın boyu anlamını taşır.
export const MapView = () => {
  

  return (
  
    <div  className="sidebar" style={{ width: '82%', height: '175%', marginLeft: "225px", marginTop: "50px" }}>
      <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "4px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>
        
          <ul style={{marginTop:"40px" ,borderRadius:"5px"}}>
           
            <li ><a href="#" style={{marginTop:"10px" }}>CAPSULE</a>
            <ul>
              <li><a href="#" style={{marginTop:"10px"}}>AKTİF </a></li>
              <li><a href="#" style={{marginTop:"10px"}}>PASİF </a></li>
            </ul>

            </li>
            <li ><a href="#" style={{marginTop:"10px"}}>ARAÇLAR</a>
            <ul>
              <li><a href="#" style={{marginTop:"10px"}}>AKTİF </a></li>
              <li><a href="#" style={{marginTop:"10px"}}>PASİF </a></li>
            </ul>

            </li>
            <li><a href="#" style={{marginTop:"10px"}}>TEKNİK SERVİSLER</a></li>
            

          </ul>

      

      </nav>

      <WrappedMap
        googleMapURL={' https://maps.googleapis.com/maps/api/js?key=AIzaSyDRYcPTiKGRUj63MQhfKgVLY0wLrb6PNLc'}
        loadingElement={<div style={{ height: '50%' }} />}
        containerElement={<div style={{ height: '50%' }} />}
        mapElement={<div style={{ height: '100%' }} />} />
    </div>

  );
}

export default MapView
// ilgili sayfayı çalıştırmak için gerekli kod.
