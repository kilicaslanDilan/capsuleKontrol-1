import  React , { Component } from 'react'


import MapView from './MapView'
import AracView from './AracView'
import Table from './Table'
import TableArac  from './TableArac'
import AktifView  from './AktifView'
import PasifCapsuleView from './PasifCapsuleView'
import DetayKargo from './DetayKargo'
import LoginView from './LoginView'
import Deneme from './Deneme'
import CapsuleEkle from './CapsuleEkle'
import Listeleİstasyon from './Listeleİstasyon'
import ListeleArac from './ListeleArac'
class AuthView extends Component {
    constructor(){
        super();
        /// 1.giriş ekrans
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
                        ?<Deneme onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 2
                        ?<MapView onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 3
                        ?<AracView onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 4
                        ?<Listeleİstasyon onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 5
                        ?<ListeleArac onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 6
                        ?<AktifView onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 7
                        ?<PasifCapsuleView onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 8
                        ?<CapsuleEkle onViewChange={this.changeView.bind(this)}/>
                        : this.state.currentView === 9
                        ?<DetayKargo onViewChange={this.changeView.bind(this)}/>
                        :<DetayKargo onViewChange={this.changeView.bind(this)}/>
                     
                     
                     
        
    }

}
export default AuthView;
