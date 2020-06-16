import React from 'react';
import axios from 'axios';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import defaultMessage from './messages';
import Header from '../../../../components/Header';
class Deneme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kullanici_adi: '',
      kullanici_sifre: '',

    }
  }




  render() {

    return (


      <div>

        <h1 style={{ paddingLeft: "480px", marginLeft: "50px", marginTop: "0px" }}><FormattedMessage id='title' defaultMessage={defaultMessage.authview.title} /></h1>

        <form  style={{marginTop:"100px"}}>
        <a  for="exampleInputLogin"><FormattedMessage id='username' defaultMessage={defaultMessage.authview.username} /></a>
          <div className="input-group">
            <div className="input-group-prepend" >
              <span className="input-group-text">
                <i className="fa fa-user"></i>

              </span>

            </div>
           

            <input type="text" name="kullanici_adi" className="form-control"  onChange={(e) => this.setState({ kullanici_adi: e.target.value })} />

          </div>
          <p></p>
          <label  for="exampleInputpassword"><FormattedMessage id='userpassword' defaultMessage={defaultMessage.authview.userpassword} /></label>
          <div className="input-group">
          <div className="input-group-prepend" >
              <span className="input-group-text">
                <i className="fa fa-lock"></i>

              </span>

            </div>
            
            
            <input type="password" name="kullanici_sifre" className="form-control"  onChange={(e) => this.setState({ kullanici_sifre: e.target.value })} />
          </div>
          <button style={{marginLeft:"450px" , marginTop:"10px"}} onClick={async (e) => {
            e.preventDefault();

            await axios.post(`http://localhost:4000/auth?kullanici_adi=${this.state.kullanici_adi}&kullanici_sifre=${this.state.kullanici_sifre}`).then((res) => {

              if (res.data == true) {
                alert(`Hoş Geldiniz ${this.state.kullanici_adi}.`)
                console.log('giriş başarılı')

                this.props.onViewChange(2);
              } else {
                alert('Kullanıcı adınızı ve ya Şifreniz Geçersiz.')
                console.log('giriş başarısız')
              }
            })
          }} className="btn btn-primary"><i className="fa fa-user"  ></i><FormattedMessage id='buttonlogin'   defaultMessage={defaultMessage.authview.buttonlogin} /></button>


        </form>
      </div>


    )
  }
}
export default Deneme