import React from 'react';
import { Link } from 'react-router';
class nav extends React.Component {
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
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active">Dashbard</a>

                            </li>
                        </ul>

                    </div>
                    
              </nav>
              
            </body>
        )

    }

}

export default Header;