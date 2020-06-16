import React, { useState } from "react";

import axios from 'axios';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import defaultMessage from './messages';



class CapsuleEkle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sube_adi: '',
            sube_adres: '',
            lat: '',
            lng: ''

        }
    }




    render() {

        return (

            <div className="sidebar" style={{ width: '100%', height: '100%', marginLeft: "225px", marginTop: "0px" }}>
                <div className="col-md-12 d-none d-md-block bg-light sidebar bg-dark" style={{ width: "9000px", height: "25px", marginLeft: "0px" }}>

                    <li style={{ textDecoration: "none", display: "block " }}>
                        <a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(4);
                        }} style={{ marginTop: "10px", textDecoration: "none", marginLeft: "20px" }}><FormattedMessage id='capsulelisting' defaultMessage={defaultMessage.authview.capsulelisting} /></a>
                        <a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(5);
                        }} style={{ marginTop: "10px", textDecoration: "none", marginLeft: "20px" }}><FormattedMessage id='carlisting' defaultMessage={defaultMessage.authview.carlisting} /> </a></li>



                </div>

                <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "2px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>
                    <ul style={{ marginTop: "40px", borderRadius: "5px" }}>

                        <li> <a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(2);
                        }} style={{ marginTop: "10px" }} ><i style={{ fontSize: "20px" }} className="fa fa-fw fa-home"></i><FormattedMessage id='cargostation' defaultMessage={defaultMessage.authview.cargostation} /></a>


                            <ul>

                                <li><a href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    this.props.onViewChange(6);
                                }} style={{ marginTop: "10px" }}><FormattedMessage id='active' defaultMessage={defaultMessage.authview.active} /> </a></li>
                                <li><a href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    this.props.onViewChange(7);
                                }} style={{ marginTop: "10px" }}><FormattedMessage id='passive' defaultMessage={defaultMessage.authview.passive} /></a></li>
                                <li><a href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    this.props.onViewChange(8);
                                }} style={{ marginTop: "10px" }}><FormattedMessage id='addCapsule' defaultMessage={defaultMessage.authview.addCapsule} /></a></li>



                            </ul>

                        </li>
                        <li ><a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(3);
                        }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-truck"></i>  <FormattedMessage id='cargocar' defaultMessage={defaultMessage.authview.cargocar} /></a>

                            <ul>

                            </ul>

                        </li>

                    </ul>



                </nav>
                <label style={{ marginLeft: "20px", marginTop: "20px" }} >Yeni Capsule eklemek için aşağıdaki bilgileri doldurunuz.</label>
                <div className="card" ></div>

                <form  style={{ marginTop: "0px", marginLeft: "50px", width: "500px" }}>
                    
                   
                    <div >
                    <div className="form-group row" style={{ marginTop: "10px" }}  >
                        <label for="inputPassword" >Seri No:</label>
                        <div className="col-sm-5" style={{ marginLeft: "70px" }}>
                            <input type="text" name="seri_no" className="form-control" id="inputPassword" onChange={(e) => this.setState({ seri_no: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-group row" style={{ marginTop: "10px" }}  >
                        <label for="inputPassword" >Şube Adı:</label>
                        <div className="col-sm-5" style={{ marginLeft: "60px" }}>
                            <input type="text" name="sube_adi" className="form-control" id="inputPassword" onChange={(e) => this.setState({ sube_adi: e.target.value })} />
                        </div>
                    </div>


                    <div className="form-group row" style={{ marginTop: "10px" }}>
                        <label for="inputPassword2" >Şube Adres:</label>
                        <div className="col-sm-5" style={{ marginLeft: "45px" }}>
                            <input type="text" name="sube_adres" className="form-control" id="inputPassword2" onChange={(e) => this.setState({ sube_adres: e.target.value })} />
                        </div>

                    </div>

                    <div className="form-group row" style={{}} >
                        <label for="inputPassword" >Enlem:</label>
                        <div class="col-sm-5">
                            <input type="text" name="lat" className="form-control" id="inputPassword" style={{ marginLeft: "80px" }} onChange={(e) => this.setState({ lat: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group row" style={{}}>



                        <label for="inputPassword2" style={{ marginLeft: "" }}>Boylam:</label>
                        <div class="col-sm-5">
                            <input type="text" name="lng" className="form-control" id="inputPassword2" style={{ marginLeft: "75px" }} onChange={(e) => this.setState({ lng: e.target.value })} />
                        </div>

                    </div>
                    <div className="form-group row" style={{}}>



                        <label for="inputPassword2" style={{ marginLeft: "" }}>Arıza Kaydı:</label>
                        <div class="col-sm-5">
                            <input type="text" name="sube_ariza_kaydi" className="form-control" id="inputPassword2" style={{ marginLeft: "50px" }}  onChange={(e) => this.setState({ sube_ariza_kaydi: e.target.value })} />
                        </div>

                    </div>
                    <div className="form-group row" style={{}}>



                        <label for="inputPassword2" style={{ marginLeft: "" }}>Çalışma Durumu:</label>
                        <div class="col-sm-5">
                            <input type="text" name="sube_calisma_durumu" className="form-control" id="inputPassword2" style={{ marginLeft: "10px" }} onChange={(e) => this.setState({ sube_calisma_durumu: e.target.value })} />
                        </div>

                    </div>
                    <div className="form-group row" style={{}}>



                        <label for="inputPassword2" style={{ marginLeft: "" }}>Doluluk Oranı:</label>
                        <div class="col-sm-5">
                            <input type="text" name="doluluk_orani" className="form-control" id="inputPassword2" style={{ marginLeft: "30px" }}  onChange={(e) => this.setState({ doluluk_orani: e.target.value })} />
                        </div>

                    </div>



                    <button style={{ marginLeft: "400px" }} className="btn btn-primary mb-2" onClick={async (e) => {
                        e.preventDefault();

                        await axios.post(`http://localhost:4000/capsuleEkle?seri_no=${this.state.seri_no}&sube_adi=${this.state.sube_adi}&sube_adres=${this.state.sube_adres}&lat=${this.state.lat}&lng=${this.state.lng}&sube_ariza_kaydi=${this.state.sube_ariza_kaydi}&sube_calisma_durumu=${this.state.sube_calisma_durumu}&doluluk_orani=${this.state.doluluk_orani}`).then((results) => {

                            if (results) {
                                alert(`EKLENDİ.`);
                                console.log('capsule ekle çalıştı');



                            } else {
                                alert('Kullanıcı adınızı ve ya Şifreniz Geçersiz.')
                                console.log('giriş başarısız')
                            }
                        })
                    }}>EKLE</button>



                    </div>

                </form>




            </div>

        )
    }
}

export default CapsuleEkle;

