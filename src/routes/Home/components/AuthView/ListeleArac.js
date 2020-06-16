import React, { useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import defaultMessage from './messages';
class ListeleArac extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount = async () => {
        const data = await axios.get(`http://localhost:4000/tabloArac`)
            .then(results => this.setState({ data: results.data }));

    }


    render() {
        return (
            <div className="sidebar" style={{ width: '100%', height: '100%', marginLeft: "225px", marginTop: "0px" }}>
            <div className="col-md-12 d-none d-md-block bg-light sidebar bg-dark" style={{ width: "9000px", height: "25px", marginLeft: "0px" }}>

                <li style={{ textDecoration: "none", display: "block " }}>
                <a href="#" onClick={async (e)=> {
                        e.preventDefault();
                        this.props.onViewChange(4);
                    }} style={{ marginTop: "10px", textDecoration: "none", marginLeft: "20px" }}><FormattedMessage id='capsulelisting'  defaultMessage={defaultMessage.authview.capsulelisting}/> </a>

                    <a href="#" onClick={async (e) => {
                        e.preventDefault();
                        this.props.onViewChange(5);
                    }} style={{ marginTop: "10px", marginLeft: "20px", textDecoration: "none" }}><FormattedMessage id='carlisting'  defaultMessage={defaultMessage.authview.carlisting}/>  </a>
                </li>



            </div>
            <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "4px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>

                <ul style={{ marginTop: "40px", borderRadius: "5px" }}>

                    <li ><a href="#" onClick={async (e) => {
                        e.preventDefault();
                        this.props.onViewChange(2);
                    }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-home"></i> <FormattedMessage id='cargostation'  defaultMessage={defaultMessage.authview.cargostation}/></a>
                        <i className="fas fa-map-marker-alt"></i>





                        <ul>


                            <li><a href="#" onClick={async (e) => {
                                e.preventDefault();
                                this.props.onViewChange(6);
                            }} style={{ marginTop: "10px" }}><FormattedMessage id='active'  defaultMessage={defaultMessage.authview.active}/>  </a></li>
                            <li><a href="#" onClick={async (e) => {
                                e.preventDefault();
                                this.props.onViewChange(7);
                            }} style={{ marginTop: "10px" }}><FormattedMessage id='passive'  defaultMessage={defaultMessage.authview.passive}/> </a></li>
                            <li><a href="#" onClick={async (e) => {
                  e.preventDefault();
                  this.props.onViewChange(8);
                }} style={{ marginTop: "10px" }}><FormattedMessage id='addCapsule' defaultMessage={defaultMessage.authview.addCapsule} /></a></li>

                        </ul>

                    </li>
                    <li ><a href="#" onClick={e => {
                        e.preventDefault();
                        this.props.onViewChange(3);
                    }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-truck"></i>  <FormattedMessage id='cargocar'  defaultMessage={defaultMessage.authview.cargocar}/></a>
                        <ul>

                            
                        </ul>

                    </li>



                </ul>



            </nav>

            <table className="table table-hover" style={{backgroundColor:"white"}}>
                <thead>
                    <tr  >
                        <th>#</th>
                        <th><FormattedMessage id='licenseplatenumber' defaultMessage={defaultMessage.authview.licenseplatenumber} /></th>
                        <th><FormattedMessage id='location' defaultMessage={defaultMessage.authview.location} /></th>
                        <th><FormattedMessage id='drivername' defaultMessage={defaultMessage.authview.drivername} /></th>
                        <th><FormattedMessage id='distributionfield' defaultMessage={defaultMessage.authview.distributionfield} /></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((row, i) => (

                            <tr >


                                <td name={i} value={row.arac_id}>{row.arac_id}</td>
                                <td name={i} value={row.plaka_no}>{row.plaka_no}</td>
                                <td name={i} value={row.arac_konum}>{row.arac_konum}</td>
                                <td name={i} value={row.sürücü_adi}>{row.sürücü_adi}</td>
                                <td name={i} value={row.dagitim_bölgesi}>{row.dagitim_bölgesi}</td>
                                <button type="submit" style={{marginTop:"5px" }} className="btn btn-primary mb-1" onClick={async (e) => {
            e.preventDefault();
            this.props.onViewChange(9);
          }}>Detay</button>

                            </tr>
                        ))

                    }




                </tbody>
            </table>






        </div>
            
        )

    }
}
export default ListeleArac;