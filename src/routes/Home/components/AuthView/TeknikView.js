import React, { useState } from "react";
import ReactDOM from 'react-dom';


export const TeknikView = ({onViewChange}) => {


  return (

    <div className="sidebar" style={{ width: '82%', height: '175%', marginLeft: "225px", marginTop: "50px" }}>
      <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "4px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>

        <ul style={{ marginTop: "40px", borderRadius: "5px"  }}>

          <li ><a href="#" onClick={e=>{ e.preventDefault();
                     onViewChange(2);}}  style={{ marginTop: "10px" }}><i style={{fontSize:"20px"}} className="fa fa-fw fa-home"></i>  CAPSULE</a>
                     <i className="fas fa-map-marker-alt"></i>
                     
                  


                   
            <ul>
              <li><a href="#"  onClick={e=>{ e.preventDefault();
                     onViewChange(2);}}  style={{ marginTop: "10px" }}>AKTİF </a></li>
              
              
              <li><a href="#" style={{ marginTop: "10px" }}>PASİF </a></li>
            </ul>

          </li>
          <li ><a href="#" onClick={e=>{ e.preventDefault();
                     onViewChange(3);}} style={{ marginTop: "10px" }}><i style={{fontSize:"20px"}} className="fa fa-fw fa-truck"></i>  ARAÇLAR</a>
            <ul>
              <li><a href="#" style={{ marginTop: "10px" }}>AKTİF </a></li>
              <li><a href="#" style={{ marginTop: "10px" }}>PASİF </a></li>
            </ul>

          </li>
          <li><a href="#" onClick={e=>{ e.preventDefault();
                     onViewChange(4);}} style={{ marginTop: "10px" }}><i style={{fontSize:"20px"}} className="fa fa-fw fa-user"></i>  TEKNİK SERVİSLER</a></li>


        </ul>



      </nav>

     
    </div>

  );
}

export default TeknikView;
