import React, { useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import defaultMessage from './messages';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import DetayKargo from "./DetayKargo";
import TutorialDataService from "./TutorialData"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Listeleİstasyon extends React.Component {
    constructor(props) {
        super(props);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.onChangeDolulukOrani = this.onChangeDolulukOrani.bind(this);
        this.onChangeSeriNo = this.onChangeSeriNo.bind(this);
        this.onChangeSubeArizaKaydi = this.onChangeSubeArizaKaydi.bind(this);
        this.onChangeSubeAdres = this.onChangeSubeAdres.bind(this);
        this.onChangeSubeAdi = this.onChangeSubeAdi.bind(this);
        this.onChangeSubeCalismaDurumu = this.onChangeSubeCalismaDurumu.bind(this);
        this.onChangeLat = this.onChangeLat.bind(this);
        this.onChangeLng = this.onChangeLng.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleClickOpen = this.addItem.bind(this);


        this.state = {
            data: [],
            open: false,
            selectedIstasyon: {
                seri_no: "",
                doluluk_orani: "",
                sube_calisma_durumu: "",
                sube_ariza_kaydi: "",
                sube_adres: "",
                sube_adi: "",
                lat: "",
                lng: "",

            }









        };
    }
    handleClickOpen = (e) => {
        setOpen(true);
    };
    handleClose = (e) => {
        return { open: false }
    };

    onChangeLng(e) {
        const lng = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    lng: lng
                }
            };
        });
    }
    changeHandler = event => {
        event.persist();
        let doluluk_orani = event.target.value;
        let seri_no = event.target.value;

        this.setState(prevState => ({
            selectedIstasyon: { ...prevState.selectedIstasyon, [event.target.value]: doluluk_orani },
            selectedIstasyon: { ...prevState.selectedIstasyon, [event.target.value]: seri_no }
        }))
    };
    handleSubmit = event => {
        event.preventDefault();
        this.addItem(this.state.selectedIstasyon);
    }
    addItem = selectedIstasyon => {
        axios.put("http://localhost:4000/capsuleUpdate/items", selectedIstasyon)
            .then(res => {
                this.setState({ capsuleUpdate: res.data });
                this.history.push("/items");
            })
            .catch(err => console.log(err));
    }
    editItem = event => {
        event.preventDefault();
        this.props.history.push(`/capsuleUpdate/${this.state.selectedIstasyon.seri_no}`);
    }
    updateItem = selectedIstasyon => {
        axios.put(`http://localhost:4000/capsuleUpdate/${selectedIstasyon.seri_no}`, selectedIstasyon)
            .then(res => {
                this.setState({ data: res.data });
                this.history.push('/data');
            })
            .catch(err => console.log(err));
    }
    saveTutorial() {
        var data = {
            seri_no: this.state.seri_no,
            doluluk_orani: this.state.doluluk_orani,
            sube_calisma_durumu: this.state.sube_calisma_durumu,
            sube_ariza_kaydi: this.state.sube_ariza_kaydi,
            sube_adres: this.state.sube_adres,
            sube_adi: this.state.sube_adi,
            lat: this.state.lat,
            lng: this.state.lng,
        };

        TutorialDataService.create(data)
            .then(response => {
                this.setState({
                    seri_no: response.data.seri_no,
                    doluluk_orani: response.data.doluluk_orani,
                    sube_calisma_durumu: response.data.sube_calisma_durumu,
                    sube_ariza_kaydi: response.data.sube_ariza_kaydi,
                    sube_adres: response.data.sube_adres,
                    sube_adi: response.data.sube_adi,
                    lat: response.data.lat,
                    lng: response.data.lng,

                    published: response.data.published,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeLng(e) {
        const lng = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    lng: lng
                }
            };
        });
    }
    onChangeLat(e) {
        const lat = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    lat: lat
                }
            };
        });
    }
    onChangeSubeAdi(e) {
        const sube_adi = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    sube_adi: sube_adi
                }
            };
        });
    }
    onChangeSubeAdres(e) {
        const sube_adres = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    sube_adres: sube_adres
                }
            };
        });
    }
    onChangeSubeArizaKaydi(e) {
        const sube_ariza_kaydi = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    sube_ariza_kaydi: sube_ariza_kaydi
                }
            };
        });
    }
    onChangeSubeCalismaDurumu(e) {
        const sube_calisma_durumu = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    sube_calisma_durumu: sube_calisma_durumu
                }
            };
        });
    }

    onChangeSeriNo(e) {
        const seri_no = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    seri_no: seri_no
                }
            };
        });
    }
    onChangeDolulukOrani(e) {

        const doluluk_orani = e.target.value;

        this.setState(function (prevState) {
            return {
                selectedIstasyon: {
                    ...prevState.selectedIstasyon,
                    doluluk_orani: doluluk_orani
                }
            };
        });
    }
    updatePublished(status) {
        var data = {
            seri_no: this.state.selectedIstasyon.seri_no,
            doluluk_orani: this.state.selectedIstasyon.doluluk_orani,
            sube_adres: this.state.selectedIstasyon.sube_adres,
            sube_ariza_kaydi: this.state.selectedIstasyon.sube_ariza_kaydi,
            sube_calisma_durumu: this.state.selectedIstasyon.sube_calisma_durumu,
            sube_adi: this.state.selectedIstasyon.sube_adi,





            published: status
        };

        TutorialDataService.update(this.state.selectedIstasyon.seri_no, doluluk_orani, sube_adres, sube_ariza_kaydi, sube_calisma_durumu, sube_adi)
            .then(response => {
                this.setState(prevState => ({
                    selectedIstasyon: {
                        ...prevState.selectedIstasyon,
                        published: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    updateTutorial() {
        TutorialDataService.update(
            this.state.selectedIstasyon.seri_no,
            this.state.selectedIstasyon
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The tutorial was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidMount = async () => {
        const data = await axios.get(`http://localhost:4000/tablo`)
            .then(results => this.setState({ data: results.data }));

    }




    render() {
        const { selectedIstasyon } = this.state;
        const { open } = this.state;


        return (
            <div className="sidebar" style={{ width: '82%', height: '100%', marginLeft: "225px", marginTop: "0px" }}>
                <div className="col-md-12 d-none d-md-block bg-light sidebar bg-dark" style={{ width: "9000px", height: "25px", marginLeft: "0px" }}>

                    <li style={{ textDecoration: "none", display: "block " }}>
                        <a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(4);
                        }} style={{ marginTop: "10px", textDecoration: "none", marginLeft: "20px" }}><FormattedMessage id='capsulelisting' defaultMessage={defaultMessage.authview.capsulelisting} /> </a>

                        <a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(5);
                        }} style={{ marginTop: "10px", marginLeft: "20px", textDecoration: "none" }}><FormattedMessage id='carlisting' defaultMessage={defaultMessage.authview.carlisting} />  </a>
                    </li>



                </div>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar bg-dark fixed-top fixed-left" style={{ marginTop: "50px", borderRadius: "4px", borderRight: "1px solid rgba(0,0,.1)", height: "600px" }}>

                    <ul style={{ marginTop: "40px", borderRadius: "5px" }}>

                        <li ><a href="#" onClick={async (e) => {
                            e.preventDefault();
                            this.props.onViewChange(2);
                        }} style={{ marginTop: "10px" }}><i style={{ fontSize: "20px" }} className="fa fa-fw fa-home"></i>  <FormattedMessage id='cargostation' defaultMessage={defaultMessage.authview.cargostation} /></a>
                            <i className="fas fa-map-marker-alt"></i>





                            <ul>

                                <li><a href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    this.props.onViewChange(2);
                                }} style={{ marginTop: "10px" }}><FormattedMessage id='active' defaultMessage={defaultMessage.authview.active} />  </a></li>


                                <li><a href="#" onClick={async (e) => {
                                    e.preventDefault();
                                    this.props.onViewChange(7);
                                }} style={{ marginTop: "10px" }}><FormattedMessage id='passive' defaultMessage={defaultMessage.authview.passive} /> </a></li>
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
                <table className="table table-hover" style={{backgroundColor:"white"}}>
                    <thead>
                        <tr  >
                            <th>#</th>
                            <th><FormattedMessage id='station' defaultMessage={defaultMessage.authview.station} /></th>
                            <th><FormattedMessage id='address' defaultMessage={defaultMessage.authview.address} /></th>
                            <th><FormattedMessage id='faultstatus' defaultMessage={defaultMessage.authview.faultstatus} /></th>
                            <th><FormattedMessage id='workingstatus' defaultMessage={defaultMessage.authview.workingstatus} /></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((row, i) => (

                                <tr key={row.seri_no}>


                                    <td name={i} value={row.seri_no}>{row.seri_no}</td>
                                    <td name={i} value={row.sube_adi}>{row.sube_adi}</td>
                                    <td name={i} value={row.sube_adres}>{row.sube_adres}</td>
                                    <td name={i} value={row.sube_ariza_kaydi}>{row.sube_ariza_kaydi}</td>
                                    <td name={i} value={row.sube_calisma_durumu}>{row.sube_calisma_durumu}</td>
                                   
                                    <button type="submit" style={{ marginTop: "5px" }} className="btn btn-primary mb-1" onClick={() => {
                                        this.setState(() => {
                                            return { selectedIstasyon: row, open: true };
                                        })

                                    }
                                    } > Detay</button>

                                </tr>
                            ))

                        }


















                    </tbody>

                </table>
                {selectedIstasyon && (
                    <div style={{ backgroundColor:"#fff"}}> 


                        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">

                            <form style={{  marginTop: "20px", marginLeft: "100px", width: "500px" ,height:"800px" ,backgroundColor:"#fff"}} onSubmit={this.handleSubmit}>


                                <div>
                                    <div className="form-group row" style={{ marginTop: "10px" }}  >
                                        <label for="inputPassword" >Seri No:</label>
                                        <div className="col-sm-5" style={{ marginLeft: "70px" }}>
                                            <input type="text" name="seri_no" className="form-control" id="inputPassword" value={this.state.selectedIstasyon.seri_no} onChange={this.onChangeSeriNo} />
                                        </div>
                                    </div>

                                    <div className="form-group row" style={{ marginTop: "10px" }}  >
                                        <label for="inputPassword" >Şube Adı:</label>
                                        <div className="col-sm-5" style={{ marginLeft: "60px" }}>
                                            <input type="text" name="sube_adi" className="form-control" id="inputPassword" value={this.state.selectedIstasyon.sube_adi} onChange={this.onChangeSubeAdi} />
                                        </div>
                                    </div>


                                    <div className="form-group row" style={{ marginTop: "10px" }}>
                                        <label for="inputPassword2" >Şube Adres:</label>
                                        <div className="col-sm-5" style={{ marginLeft: "45px" }}>
                                            <input type="text" name="sube_adres" className="form-control" id="inputPassword2" value={this.state.selectedIstasyon.sube_adres} onChange={this.onChangeSubeAdres} />
                                        </div>

                                    </div>

                                    <div className="form-group row" style={{}} >
                                        <label for="inputPassword" >Enlem:</label>
                                        <div class="col-sm-5">
                                            <input type="text" name="lat" className="form-control" id="inputPassword" style={{ marginLeft: "80px" }} value={this.state.selectedIstasyon.lat} onChange={this.onChangeLat} />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{}}>



                                        <label for="inputPassword2" style={{ marginLeft: "" }}>Boylam:</label>
                                        <div class="col-sm-5">
                                            <input type="text" name="lng" className="form-control" id="inputPassword2" style={{ marginLeft: "75px" }} value={this.state.selectedIstasyon.lng} onChange={this.onChangeLng} />
                                        </div>

                                    </div>
                                    <div className="form-group row" style={{}}>



                                        <label for="inputPassword2" style={{ marginLeft: "" }}>Arıza Kaydı:</label>
                                        <div class="col-sm-5">
                                            <input type="text" name="sube_ariza_kaydi" className="form-control" id="inputPassword2" style={{ marginLeft: "50px" }} value={this.state.selectedIstasyon.sube_ariza_kaydi} onChange={this.onChangeSubeArizaKaydi} />
                                        </div>

                                    </div>
                                    <div className="form-group row" style={{}}>



                                        <label for="inputPassword2" style={{ marginLeft: "" }}>Çalışma Durumu:</label>
                                        <div class="col-sm-5">
                                            <input type="text" name="sube_calisma_durumu" className="form-control" id="inputPassword2" style={{ marginLeft: "10px" }} value={this.state.selectedIstasyon.sube_calisma_durumu} onChange={this.onChangeSubeCalismaDurumu} />
                                        </div>

                                    </div>
                                    <div className="form-group row" style={{}}>



                                        <label for="inputPassword2" style={{ marginLeft: "" }}>Doluluk Oranı:</label>
                                        <div class="col-sm-5">
                                            <input type="text" name="doluluk_orani" className="form-control" id="inputPassword2" style={{ marginLeft: "30px" }} value={this.state.selectedIstasyon.doluluk_orani} onChange={this.onChangeDolulukOrani} />
                                        </div>

                                    </div>
                                    <div style={{marginLeft:"200px",marginTop:"50px"}}>
                                    <button className="btn btn-primary mb-1" onClick={async (e) => {
                                        axios.put(`http://localhost:4000/capsuleUpdate/${this.state.selectedIstasyon.seri_no}`)
                                            .then(res => {
                                                
                                                this.setState({ selectedIstasyon: res.data });
                                              
                                               
                                            }
                                            
                                            )
                                            .catch(err => console.log(err))
                                    } 
                                    }>Güncelle</button>

                                    <button style={{marginLeft:"20px"}} className="btn btn-primary mb-1" onClick={() => {
                                        this.setState(() => {
                                            return { open: false };
                                        })

                                    }
                                    } color="primary">
                                        Çıkış
          </button>

                                    </div>
                                    








                                   



                                </div>

                            </form>
                        </Dialog>
                    </div>



                )
                }







            </div>


        )
    }
}
export default Listeleİstasyon