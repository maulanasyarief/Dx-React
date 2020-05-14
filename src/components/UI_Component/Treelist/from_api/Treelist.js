import React, { Component } from 'react';

import TreeList, { RemoteOperations, Column, SearchPanel, HeaderFilter, Editing, RequiredRule, Lookup } from 'devextreme-react/tree-list';
import AspNetData from 'devextreme-aspnet-data-nojquery';
const url = 'https://js.devexpress.com/Demos/Mvc/api/TreeListTasks';

const tasksData = AspNetData.createStore({
    key: 'Task_ID',
    loadUrl: `${url}/Tasks`,
    insertUrl: `${url}/InsertTask`,
    updateUrl: `${url}/UpdateTask`,
    deleteUrl: `${url}/DeleteTask`,
    onBeforeSend: function (method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
    }
});

const DataKaryawan = AspNetData.createStore({
    key: 'ID',
    loadUrl: `${url}/TaskEmployees`
});

const MassageAlert = [
    'Not Started',
    'Need Assistance',
    'In Progress',
    'Deferred',
    'Completed'
];

function initNewRow(e) {
    e.data.Task_Status = 'Not Started';
    e.data.Task_Start_Date = new Date();
    e.data.Task_Due_Date = new Date();
}

export default class extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="card-title">TreeList</h4>
                <p className="card-text">Treelist From API</p>
                <TreeList
                    id="tree-list"
                    dataSource={tasksData}
                    keyExpr="Task_ID"
                    parentIdExpr="Task_Parent_ID"
                    hasItemsExpr="Has_Items"
                    expandedRowKeys={[1, 2]}
                    showRowLines={true}
                    showBorders={true}
                    columnAutoWidth={true}
                    wordWrapEnabled={true}
                    onInitNewRow={initNewRow}>
                    <RemoteOperations filtering={true} sorting={true} grouping={true} />
                    <SearchPanel visible={true} />
                    <HeaderFilter visible={true} />
                    <Editing
                        mode="row"
                        allowAdding={true}
                        allowUpdating={true}
                        allowDeleting={true} />
                    <Column dataField="Task_Subject" minWidth={250}>
                        <RequiredRule />
                    </Column>
                    <Column dataField="Task_Assigned_Employee_ID" caption="Assigned" minWidth={120}>
                        <Lookup dataSource={DataKaryawan} valueExpr="ID" displayExpr="Name" />
                        <RequiredRule />
                    </Column>
                    <Column dataField="Task_Status" caption="Status" minWidth={120}>
                        <Lookup dataSource={MassageAlert} />
                    </Column>
                    <Column dataField="Task_Start_Date" caption="Start Date" dataType="date" />
                    <Column dataField="Task_Due_Date" caption="Due Date" dataType="date" />
                </TreeList>
            </div>
        );
    }
}
