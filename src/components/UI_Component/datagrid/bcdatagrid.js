import React, { Component } from 'react'
import { Column, DataGrid, GroupPanel, Scrolling, Editing } from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';
import CustomStore from 'devextreme/data/custom_store';
import axios from 'axios';


const URL = 'https://dev-aks.000webhostapp.com/api/v1/bom';
const URL_JSON = 'http://localhost:3005/result';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataProfile: {
                id: '',
                nama: '',
                alamat: '',
                tgl_lahir: ''
            },
            LoadData: new CustomStore({
                //key: ['id', 'nama', 'alamat', 'tgl_lahir'],
                key: 'id',
                load: () => {
                    return axios.get(`${URL_JSON}`).then((res) => {
                        return res.data;
                    }).catch((err) => {
                        console.log(err);
                    })
                },
                insert: (value) => {
                    return axios.post(`${URL_JSON}`, value).then((res) => {
                        return res.data;
                    }).catch((err) => {
                        console.log(err);
                    })
                    //console.log(value);
                },
                update: (key) => {
                    console.log('value update', this.state.dataProfile);
                    // // const dataupdated = this.state.dataProfile;
                    // // const values = key;
                    // return axios.put(`${URL_JSON}/${key}`, this.state.dataProfile).then((res) => {
                    //     console.log(res)
                    //     return res.data;
                    // }).catch((err) => {
                    //     console.log(err);
                    // })
                },
                remove: (key) => {
                    return axios.delete(`${URL_JSON}/${key}`).then((res) => {
                        return res.data;
                    }).catch((err) => {
                        console.log(err);
                    })
                }

            })
        };

        this.dataGridRef = React.createRef();
        this.hendelChange = this.hendelChange.bind(this);
    }

    hendelChange(e) {
        //   console.log(e)
        // console.log("evnt new val:", event.row.values)
        // console.log('init state', this.state.dataProfile);
        // let copyState = { ...this.state.dataProfile };// copy state lama
        // copyState['id'] = event.row.key;
        // copyState['nama'] = event.row.values[0];
        // copyState['alamat'] = event.row.values[1];
        // copyState['tgl_lahir'] = event.row.values[2];
        // this.setState({
        //     dataProfile: copyState
        // });
        // console.log('new state', this.state.dataProfile)
        if (e.dataField === 'nama' && e.parentType === 'dataRow') {
            let standardHandler = e.editorOptions.onValueChanged;
            e.editorOptions.onValueChanged = function (e) { // Overrides the standard handler
                // ...
                // Custom commands go here
                // ...
                let data = standardHandler(e); // Calls the standard handler to save the edited value
                console.log("d:", data);
            }
        }
    }

    componentDidMount() {
        console.log('state awal', this.state.dataProfile)
    }

    render() {
        const { LoadData } = this.state;
        return (
            <div className="container">
                <div className="card mt-3 mb-3">
                    <div className="card-body">
                        <h4 className="card-title">Data Grid</h4>
                        <p className="card-text">Load data From RESTFUll API</p>

                        <DataGrid
                            showBorders={true}
                            id="gridContainer"
                            dataSource={LoadData}
                            allowColumnReordering={true}
                            // onFocusedCellChanged={this.hendelChange}
                            onEditorPreparing={this.hendelChange}
                        //  onCellClick={this.hendelupdated}
                        >
                            <Editing
                                mode="row" //{/* 'batch' | 'cell' | 'form' | 'popup' | 'row'*/}
                                allowAdding={true}
                                allowDeleting={true}
                                allowUpdating={true}
                            />

                            <GroupPanel visible={true} />
                            <Scrolling mode="virtual" />

                            {/* <Column
                                dataField="id"
                                caption="Id">
                                <RequiredRule />
                            </Column> */}

                            <Column
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
                </div>
            </div>
        )
    }
}
