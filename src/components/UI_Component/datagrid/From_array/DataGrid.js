import React, { Component } from 'react';
//import DataGrid from 'devextreme-react/data-grid';
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    // Pager,
    Paging,
    SearchPanel
} from 'devextreme-react/data-grid';
import { customers } from './data_array';

// const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoExpandAll: true
        }
        this.onAutoExpandAllChanged = this.onAutoExpandAllChanged.bind(this);
    }

    onAutoExpandAllChanged() {
        this.setState({
            autoExpandAll: !this.state.autoExpandAll
        });
    }

    render() {
        return (

            <div className="container">
                <h5 className="card-title">Data Grid</h5>
                <p className="card-text">Load data From Array</p>
                <DataGrid
                    dataSource={customers}
                    // defaultColumns={columns}
                    showBorders={true}
                    allowColumnReordering={true}
                >

                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} />
                    <Grouping autoExpandAll={this.state.autoExpandAll} />
                    <Paging defaultPageSize={10} />
                    <Column
                        dataField="CompanyName"
                        caption="Company Name"
                        dataType="string"
                    />

                    <Column
                        dataField="City"
                        caption="City Name"
                        dataType="string"
                    />

                    <Column
                        dataField="State"
                        caption="State"
                        dataType="string"
                    />
                    <Column
                        dataField="Phone"
                        caption="Phone Number"
                        dataType="string"
                    />
                    <Column
                        dataField="Fax"
                        caption="Fax"
                        dataType="string"
                    />
                </DataGrid>
            </div>
        );
    }
}
