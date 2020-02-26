import React from 'react';
const LoginView = ({onViewChange})=>(
    <div>
         <h1 style={{paddingLeft:"480px",marginTop:"50px" }}>Cargom Express</h1>
         <form className="form-inline">
             
                    <div className="form-group mb-2">
                        <label className="sr-only">Email address</label>
                        <input type="email"  className="form-control" placeholder="E-Posta" />

                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="sr-only">Password</label>
                        <input type="password" className="form-control" placeholder="Şifre" />
                    </div>
                    <button type="submit"  onClick={e=>{ e.preventDefault();
                     onViewChange(3);}} className="btn btn-primary">Giriş Yap</button>
                    
                    
                </form>
                <p>
                    Henüz Üye olmadınız mı ?<br />
                    Kayıt olmak için <b><u><a href="#" onClick={e=>{ e.preventDefault();
                     onViewChange(2);}}>tıklayınız.</a></u></b>
                </p>
    </div>

)
export default LoginView;

