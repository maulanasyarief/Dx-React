import React, { Component } from 'react';

import { TreeList, Column } from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

export default class extends Component {
    render() {
        return (

            <div className="container">
                <h4 className="card-title">TreeList</h4>
                <p className="card-text">Treelist From Array data</p>

                <TreeList
                    id="employees"
                    dataSource={employees}
                    rootValue={-1}
                    defaultExpandedRowKeys={expandedRowKeys}
                    showRowLines={true}
                    showBorders={true}
                    columnAutoWidth={true}
                    keyExpr="ID"
                    parentIdExpr="Head_ID"
                >
                    <Column
                        dataField="Title"
                        caption="Position" />
                    <Column
                        caption="Nama Lengkap"
                        dataField="Full_Name" />
                    <Column
                        caption="Kota"
                        dataField="City" />
                    <Column
                        caption="Alamat"
                        dataField="State" />
                    <Column
                        caption="No Hp"
                        dataField="Mobile_Phone" />
                    <Column

                        dataField="Hire_Date"
                        dataType="date" />
                </TreeList>
            </div>
        );
    }
}
