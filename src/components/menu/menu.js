import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Logoreact from './logo-react.png'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {
            border: '2px solid #0080c0',
            borderRadius: '50px',
            heigth: "250px"

        }
    } else {
        return { color: "#fff" }
    }
}

const Menu = ({ history }) => {

    return (
        <nav className="navbar navbar-expand-md bg-dark fixed-top">
            <div className="container">
                {/* <a className="navbar-brand"><img className="img-responsive" src={Logoreact} /></a> */}
                <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse justify-content-between" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={isActive(history, "/")} >
                            <Link className="nav-link text-white font-weight-bold "
                                to="/"  >HOME</Link>
                        </li>

                        <li className="nav-item" style={isActive(history, "/doc")}>
                            <Link Link className="nav-link text-light font-weight-bold px-3" to="/doc">DOKUMENTASI</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link text-light font-weight-bold px-3" href="#">CONTACT</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav >
    )
};

export default withRouter(Menu);