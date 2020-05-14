import React, { Component } from 'react';
import SidebarDoc from '../../components/menu/Sidebardoc'
import {
    BrowserRoute, Route, Navlink, Switch,
    useParams,
    useRouteMatch
} from 'react-router-dom'
import {
    Datagrid, DataGridArray, MasterDetail,
    PivotgridAPI, PivotgridArray,
    TreelistAPI, TreelistArray,
    BarChart, LinebarChart, LineChart, StackBar,
    BasicState, ReduxLib, Footer
} from '../../components'

export default ({ match }) => {

    return (
        <div className="container-fluid mt-5" >
            <div className="row" >
                <div className="wrapper">
                    {/* <!-- Sidebar  --> */}

                    <SidebarDoc />

                    {/* <!-- Page Content  --> */}
                    <div id="content">
                        <nav aria-label="breadcrumb" className="navbar p-3 mb-2 bg-white text-dark mt-5">
                            <div className="container-fluid">
                                <button type="button" id="sidebarCollapse" className="btn btn-info">
                                    <i className="fas fa-align-left"></i>
                                    <span>Navigasi</span>
                                </button>
                            </div>

                        </nav>
                        <div className="card col-md-12 ">
                            <div className="card-body ">
                                {/*default message*/}
                                <Route exact path={match.url} render={() => (
                                    <h5>Pilih Dokumentasi</h5>
                                )} />
                                <Switch>
                                    <Route path={`${match.url}/datagrid-array`} component={DataGridArray} />
                                    <Route path={`${match.url}/datagrid-crud-api`} component={Datagrid} />
                                    <Route path={`${match.url}/datagrid-array`} component={DataGridArray} />
                                    <Route path={`${match.url}/datagrid-master-detail`} component={MasterDetail} />
                                    <Route path={`${match.url}/pivotgrid-api`} component={PivotgridAPI} />
                                    <Route path={`${match.url}/pivotgrid-array`} component={PivotgridArray} />
                                    <Route path={`${match.url}/treelist-api`} component={TreelistAPI} />
                                    <Route path={`${match.url}/treelist-array`} component={TreelistArray} />
                                    <Route path={`${match.url}/bar-chart`} component={BarChart} />
                                    <Route path={`${match.url}/linebar-chart`} component={LinebarChart} />
                                    <Route path={`${match.url}/line-chart`} component={LineChart} />
                                    <Route path={`${match.url}/stackbar-chart`} component={StackBar} />

                                    <Route path={`${match.url}/basic-state`} component={BasicState} />
                                    <Route path={`${match.url}/redux-lib`} component={ReduxLib} />

                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </div>
    );
}
