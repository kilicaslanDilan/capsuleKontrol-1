import React, { useState } from "react";
import ReactDOM from 'react-dom';

import * as araclar from "./araclar.json";
import ListeleArac from "./ListeleArac.js";

import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';
import defaultMessage  from './messages';

export const TableArac = ({ onViewChange }) => {

    return (

        <div className="sidebar" style={{ width: '82%', height: '175%', marginLeft: "225px", marginTop: "0px" }}>
            <div className="col-md-12 d-none d-md-block bg-light sidebar bg-dark" style={{ width: "9000px", height: "25px", marginLeft: "0px" }}>

                <li style={{ textDecoration: "none", display: "block " }}>
                <a href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(4);
                    }} style={{ marginTop: "10px", textDecoration: "none", marginLeft: "20px" }}><FormattedMessage id='capsulelisting'  defaultMessage={defaultMessage.authview.capsulelisting}/> </a>

                    <a href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(5);
                    }} style={{ marginTop: "10px", marginLeft: "20px", textDecoration: "none" }}><FormattedMessage id='carlisting'  defaultMessage={defaultMessage.authview.carlisting}/>  </a>
                </li>



            </div>
            <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "4px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>

                <ul style={{ marginTop: "40px", borderRadius: "5px" }}>

                    <li ><a href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(2);
                    }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-home"></i> <FormattedMessage id='cargostation'  defaultMessage={defaultMessage.authview.cargostation}/></a>
                        <i className="fas fa-map-marker-alt"></i>





                        <ul>


                            <li><a href="#" onClick={e => {
                                e.preventDefault();
                                onViewChange(6);
                            }} style={{ marginTop: "10px" }}><FormattedMessage id='active'  defaultMessage={defaultMessage.authview.active}/>  </a></li>
                            <li><a href="#" onClick={e => {
                                e.preventDefault();
                                onViewChange(7);
                            }} style={{ marginTop: "10px" }}><FormattedMessage id='passive'  defaultMessage={defaultMessage.authview.passive}/> </a></li>
                            <li><a href="#" onClick={e => {
                  e.preventDefault();
                  onViewChange(8);
                }} style={{ marginTop: "10px" }}><FormattedMessage id='addCapsule' defaultMessage={defaultMessage.authview.addCapsule} /></a></li>

                        </ul>

                    </li>
                    <li ><a href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(3);
                    }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-truck"></i>  <FormattedMessage id='cargocar'  defaultMessage={defaultMessage.authview.cargocar}/></a>
                        <ul>

                            
                        </ul>

                    </li>



                </ul>



            </nav>

            <ListeleArac  />






        </div>

    );
}

export default TableArac;

