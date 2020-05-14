import React, { Component } from 'react'
import PivotGrid, {
    FieldChooser,
    Scrolling,
    Export
} from 'devextreme-react/pivot-grid';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { sales } from './data';

const my_datasource = new PivotGridDataSource({
    fields: [{
        caption: 'Region',
        width: 120,
        dataField: 'region',
        area: 'row'
    }, {
        caption: 'City',
        dataField: 'city',
        width: 150,
        area: 'row',
        selector: function (data) {
            return `${data.city} (${data.country})`;
        }
    }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column'
    }, {
        caption: 'Sales',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data'
    }],
    store: sales
});


export default class extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="card-title">Pivotgrid</h4>
                <p className="card-text">Load data From Array</p>

                <PivotGrid
                    id={sales}
                    allowSorting={true}
                    allowSortingBySummary={true}
                    allowFiltering={true}
                    height={620}
                    showBorders={true}
                    rowHeaderLayout="tree"
                    dataSource={my_datasource}>

                    <Export enabled={true} fileName="Sales" />
                    <Scrolling mode="virtual" />
                </PivotGrid>
            </div>
        );
    }
}

