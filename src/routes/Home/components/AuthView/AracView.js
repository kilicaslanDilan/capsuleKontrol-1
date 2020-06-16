import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as aracData from "./araclar.json";
import axios from 'axios';
import ProgressBar from "bootstrap-progress-bar";
import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';
import defaultMessage  from './messages';
//harita.json isimli sayfada capsulelerin konumları bulunmaktadır.Bu fondksyonda bu verileri çekiyoruz..

class Map extends React.Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      selectedArac: '',
    };
  }
  
  componentDidMount = async () => {
    const data = await axios.get(`http://localhost:4000/tabloArac`)
      .then(results => this.setState({ data: results.data}));
    
  }


  render() {
    const { selectedArac } = this.state;

    return (
      <GoogleMap
        defaultZoom={6.23}
        defaultCenter={{ lat: 38.73122, lng: 35.478729 }}>
        {this.state.data.map(row => (
          <Marker
            key={row.arac_id}

            position={{
              lat: row.lat,
              lng: row.lng
            }}

            onClick={() => {
              this.setState(() => {
                return { selectedArac: row };
              });
            

            }}
            icon={{
              url: '/arac.svg',
              scaledSize: new window.google.maps.Size(50, 50)

            }}
          />

        ))}

        {selectedArac && (
          <InfoWindow
            position={{
              lat: selectedArac.lat,
              lng: selectedArac.lng
            }}
            onCloseClick={() => {
              this.setState(() => {
                return { selectedArac: null };
              });
            }}
          >

            <div className="card" style={{ width: "300px", height: "300px", backgroundColor: "#b0e0e6" }}>
              <h5 style={{ marginLeft: "70px" }}></h5>
              <div className="detay" style={{ marginTop: "20px" }}>

                <p><b style={{ fontWeight: "bold" }}><FormattedMessage id='licenseplatenumber'  defaultMessage={defaultMessage.authview.licenseplatenumber}/>:</b>{selectedArac.plaka_no}</p>
                <p><b style={{ fontWeight: "bold" }}><FormattedMessage id='location'  defaultMessage={defaultMessage.authview.location}/>:</b>{selectedArac.arac_konum}</p>
                <p><b style={{ fontWeight: "bold" }}><FormattedMessage id='drivername'  defaultMessage={defaultMessage.authview.drivername}/>:</b>{selectedArac.sürücü_adi}</p>
                <p><b style={{ fontWeight: "bold" }}><FormattedMessage id='distributionfield'  defaultMessage={defaultMessage.authview.distributionfield}/>:</b>{selectedArac.dagitim_bölgesi}</p>
                <p><b style={{ fontWeight: "bold" }}><FormattedMessage id='fullrate'  defaultMessage={defaultMessage.authview.fullrate}/>:<ProgressBar message={`${selectedArac.doluluk_orani}%`} height="40%" width={`${selectedArac.doluluk_orani}%`} srOnly /></b></p>

              </div>
            </div>


          </InfoWindow>
        )}

      </GoogleMap>
    )
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
// Haritanın boyutunu ayarlıyoruz.ve google haritasını getiriyoruz.
// container haritanın boyu anlamını taşır.
export const AracView = ({ onViewChange }) => {


  return (

    <div className="sidebar" style={{ width: '100%', height: '100%', marginLeft: "225px", marginTop: "0px" }}>
      <div className="col-md-12 d-none d-md-block bg-light sidebar bg-dark" style={{ width: "9000px", height: "25px", marginLeft: "0px" }}>

        <li style={{ textDecoration: "none", display: "block " }}>
          <a href="#" onClick={async (e)=> {
            e.preventDefault();
            onViewChange(4);
          }} style={{ marginTop: "10px", textDecoration: "none", marginLeft: "20px" }}><FormattedMessage id='capsulelisting'  defaultMessage={defaultMessage.authview.capsulelisting}/> </a>
          <a href="#" onClick={async (e) => {
            e.preventDefault();
            onViewChange(5);
          }} style={{ marginTop: "10px", marginLeft: "20px", textDecoration: "none" }}><FormattedMessage id='carlisting'  defaultMessage={defaultMessage.authview.carlisting}/> </a></li>



      </div>
      <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "4px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>

        <ul style={{ marginTop: "40px", borderRadius: "5px" }}>

          <li ><a href="#" onClick={async (e) => {
            e.preventDefault();
           onViewChange(2);
          }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-home"></i> <FormattedMessage id='cargostation'  defaultMessage={defaultMessage.authview.cargostation}/></a>
            <ul>
              <li><a href="#" onClick={async (e) => {
                e.preventDefault();
                onViewChange(6);
              }} style={{ marginTop: "10px" }}><FormattedMessage id='active'  defaultMessage={defaultMessage.authview.active}/></a></li>
              <li><a href="#" onClick={async (e) => {
                e.preventDefault();
                onViewChange(7);
              }} style={{ marginTop: "10px" }}><FormattedMessage id='passive'  defaultMessage={defaultMessage.authview.passive}/> </a></li>
              <li><a href="#" onClick={async (e) => {
                  e.preventDefault();
                  onViewChange(8);
                }} style={{ marginTop: "10px" }}><FormattedMessage id='addCapsule' defaultMessage={defaultMessage.authview.addCapsule} /></a></li>
            </ul>

          </li>
          <li ><a href="#" style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-truck"></i> <FormattedMessage id='cargocar'  defaultMessage={defaultMessage.authview.cargocar}/></a>
            <ul>

            </ul>

          </li>



        </ul>



      </nav>

      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDRYcPTiKGRUj63MQhfKgVLY0wLrb6PNLc'}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />} />
    </div>

  );
}

export default AracView;
// ilgili sayfayı çalıştırmak için gerekli kod.
