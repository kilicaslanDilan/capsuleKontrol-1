import React from 'react';
const SignUpView =({onViewChange})=>(
  
    <div>
         <form className="form-inline">
                    <div className="form-group mb-2">
                        <label className="sr-only">Email address</label>
                        <input style={{width:'400px',marginRight:"10px"}}type="email" readanly className="form-control" placeholder="E-Posta" />

                    </div>
                    

                    <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                  
                </form>
                <p>
                    Üye misiniz ?<br />
                    Giriş yapmak için <b><u><a href="#"onClick={e=>{ e.preventDefault();
                     onViewChange(1);}}>tıklayınız.</a></u></b>
                </p>
    </div>

)
export default SignUpView;
