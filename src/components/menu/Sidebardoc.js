import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

class SidebarDoc extends Component {
    render() {
        return (
            <div>
                <nav id="sidebar">
                    <div id="dismiss">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <ul className="list-unstyled components">
                        <h5 className="text-center">Dokumentasi</h5>
                        <li className="active">
                            <a href="#dropdown-UI" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">DEVEXTREME UI COMPONENT</a>
                            <ul className="collapse list-unstyled" id="dropdown-UI">
                                <li className="">
                                    <a href="#dropdown-datagrid" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">DATAGRID</a>
                                    <ul className="collapse list-unstyled" id="dropdown-datagrid">
                                        <li>
                                            <Link to="/doc/datagrid-crud-api">CRUD From API</Link>
                                        </li>
                                        <li>
                                            <Link to="/doc/datagrid-array">From Array</Link>
                                        </li>
                                        <li>
                                            <Link to="/doc/datagrid-master-detail">Master Detail</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#dropdown-pivotgrid" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">PIVOTGRID</a>
                                    <ul className="collapse list-unstyled" id="dropdown-pivotgrid">
                                        <li>
                                            <Link to="/doc/pivotgrid-api">From API</Link>
                                        </li>
                                        <li>
                                            <Link to="/doc/pivotgrid-array">From Array</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#dropdown-treelist" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">TREELIST</a>
                                    <ul className="collapse list-unstyled" id="dropdown-treelist">
                                        <li >
                                            <Link to="/doc/treelist-api">From API</Link>
                                        </li>
                                        <li >
                                            <Link to="/doc/treelist-array">From Array</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#dropdown-chart" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">GRAFIK CHART</a>
                                    <ul className="collapse list-unstyled" id="dropdown-chart">
                                        <li >
                                            <Link to="/doc/bar-chart">Bar Chart</Link>
                                        </li>
                                        <li >
                                            <Link to="/doc/linebar-chart">Line Bar</Link>
                                        </li>
                                        <li >
                                            <Link to="/doc/line-chart">Line Chart</Link>
                                        </li>
                                        <li >
                                            <Link to="/doc/stackbar-chart">Stack Bar</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="">
                            <a href="#dropdown-state" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">STATE MANAGEMENT</a>
                            <ul className="collapse list-unstyled" id="dropdown-state">
                                <li>
                                    <Link to="/doc/basic-state" title="Basic State">Basic State</Link>
                                </li>
                                <li>
                                    <Link to="/doc/datagrid-crud-api">CONTEXT API</Link>
                                </li>
                                <li>
                                    <Link to="/doc/redux-lib">REDUX</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SidebarDoc;