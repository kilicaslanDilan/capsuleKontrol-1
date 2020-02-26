import  React , { Component } from 'react'
import LoginView from './LoginView'
import SignUpView from './SignUpView'
import MapView from './MapView'
class AuthView extends Component {
    constructor(){
        super();
        /// 1.giriş ekran
        /// 2.kayıt ekranı
        ///3.harita sayfam
        this.state={
            currentView: 1

        }
        
       
       
    }
    
    
    changeView(newView){
        this.setState({
            currentView: newView
        })
    }
    render() {
        return this.state.currentView ===1
                        ?<LoginView onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 2
                        ?<SignUpView onViewChange={this.changeView.bind(this)}/>
                        :<MapView onViewChange={this.changeView.bind(this)}/>
        
        
    }

}
export default AuthView;
