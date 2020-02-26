import React from 'react';
import { Link } from 'react-router';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isNavOpen: false
        }

    }
    buttonClicked() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })

    }
    render() {
        console.log("RENDERING");
        return (
            <body>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{ width: "100%", height: "50px" }}>
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Cargom Express</a>
                    <input className="form-control mr-sm-2" type="search" placeholder="Ara" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Ara</button>
                    <ul className="navbar-nav px-3 " style={{ paddingLeft: "100px" }} >
                        <li className="nav-item ">
                            <a className="nav-link" href="#" >Giriş</a>
                        </li>
                    </ul>
                </nav>
                
            </body>
        )

    }

}

export default Header;
