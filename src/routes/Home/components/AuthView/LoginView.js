import React from 'react';
import axios from 'axios';
import Deneme from './Deneme';

function handleClick(e) {
  
}


const LoginView = ({ onViewChange }) => (
    
        <div>
            <h1 style={{ paddingLeft: "480px", marginTop: "0px" }}>Cargom Express</h1>
            <form   className="form-inline">

                <div className="form-group mb-2">

                    <input type="text" name="kullanıcıAdı" className="form-control"  placeholder="Kullanıcı Adı " />

                </div>
                <div className="form-group mx-sm-3 mb-2">

                    <input type="password" name="kullanıcıSifre"  className="form-control" placeholder="Şifre" />
                </div>
                <button onClick={async (e) =>{
                  //göserdiğim yerlere formdan verileri alıp yerleştirmen gerekiyor. Yardımcı olamayacağım buraya. Ama eminim sen yaparsın
                  e.preventDefault();
                  await axios.post(`http://localhost:4000/auth?kullanıcıAdı=nazlı&kullanıcıSifre=55`).then((res) =>{
                    if(res.data == true){
                      console.log('giriş başarılı')
                      onViewChange(2);
                    }else{
                      console.log('giriş başarısız')
                    }
                  })
                }}  className="btn btn-primary">Giriş Yap</button>


            </form>
            <Deneme/>
        </div>

   


)
export default LoginView;

