import React, { Component } from 'react'
import { Column, DataGrid, GroupPanel, Scrolling, Editing } from 'devextreme-react/data-grid';

import { formatDate } from 'devextreme/localization';
import CustomStore from 'devextreme/data/custom_store';
import axios from 'axios';

// const URL = 'https://dev-aks.000webhostapp.com/api/v1/bom';
const URL = 'http://localhost:3005';
const REFRESH_MODES = ['full', 'reshape', 'repaint'];

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataPost: {
                nama: '',
                alamat: '',
                tgl_lahir: ''
            },
            getData: new CustomStore({
                key: 'id',
                load: () => this.sendRequest(`${URL}/result`),
                insert: (values) => this.sendRequest(`${URL}/result`, 'POST', values),
                update: (key, values) => this.sendRequest(`${URL}/result/${key}`, 'PUT', values),
                remove: (key) => this.sendRequest(`${URL}/result/${key}`, 'DELETE')
            }),
            requests: [],
            refreshMode: 'full'
        };

        this.clearRequests = this.clearRequests.bind(this);
        this.handleRefreshModeChange = this.handleRefreshModeChange.bind(this);
    }

    sendRequest(url, method, data) {
        method = method || 'GET';
        data = data || {};

        // this.logRequest(method, url, data);

        if (method === 'GET') {
            return fetch(url, {
                method: method,
                credentials: 'include'
            }).then(result => result.json().then(json => {
                if (result.ok) return json;
                throw json.Message;
            }));
        }

        const params = Object.keys(data).map((key) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        }).join('&');

        return fetch(url, {
            method: method,
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }, console.log('data param:', params)
        ).then(result => {
            if (result.ok) {
                return result.text().then(text => text && JSON.parse(text));
            } else {
                return result.json().then(json => {
                    throw json.Message;
                });
            }
        });
    }

    logRequest(method, url, data) {
        const args = Object.keys(data || {}).map(function (key) {
            return `${key}=${data[key]}`;
        }).join(' ');

        const time = formatDate(new Date(), 'HH:mm:ss');
        const request = [time, method, url.slice(URL.length), args].join(' ');

        this.setState((state) => {
            return { requests: [request].concat(state.requests) };
        });
    }

    clearRequests() {
        this.setState({ requests: [] });
    }

    handleRefreshModeChange(e) {
        console.log("hdl refresModechange:", e)
        this.setState({ refreshMode: e.value });
    }

    hendelOnChange(e) {
        console.log(e);
    }

    componentDidMount() {
        return fetch(`${URL}/result`)
            .then(response => response.json())
            .then(res =>
                console.log("datval :", res)
            )
    }

    render() {
        const { getData, refreshMode } = this.state;
        return (
            <div className="container">
                <h4 className="card-title">Data Grid</h4>
                <p className="card-text">Load data From RESTFUll API</p>

                <DataGrid
                    showBorders={true}
                    id="gridContainer"
                    dataSource={getData}
                    repaintChangesOnly={true}
                    allowColumnReordering={true}
                >
                    <Editing
                        refreshMode={refreshMode}
                        mode="cell" //{/* 'batch' | 'cell' | 'form' | 'popup' | 'row'*/}
                        allowAdding={true}
                        allowDeleting={true}
                        allowUpdating={true}
                    />

                    <GroupPanel visible={true} />
                    <Scrolling mode="virtual" />

                    {/* <Column
                                dataField="id"
                                caption="Id">
                            </Column> */}

                    <Column
                        onChange={this.hendelOnChange}
                        dataField="nama"
                        caption="Nama">
                    </Column>

                    <Column
                        dataField="alamat"
                        caption="Alamat"                         >
                    </Column>

                    <Column
                        dataField="tgl_lahir"
                        caption="Tanggal Lahir" dataType="date">
                    </Column>
                </DataGrid>
            </div>
        )
    }
}
