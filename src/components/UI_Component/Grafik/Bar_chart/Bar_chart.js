import React, { Component } from 'react';
import { Chart, Label, CommonSeriesSettings, Format, Series } from 'devextreme-react/chart';
import { dataSource } from './data.js';

export default class extends Component {
    render() {

        return (
            <div className="container">
                <h4 className="card-title">Grafik Bar-Chart</h4>
                <p className="card-text">Load data From array</p>
                <Chart id="chart" dataSource={dataSource}>
                    <CommonSeriesSettings
                        argumentField="state"
                        type="bar"
                        hoverMode="allArgumentPoints"
                        selectionMode="allArgumentPoints"
                    >
                        <Label visible={true}>
                            <Format type="fixedPoint" precision={0} />
                        </Label>
                    </CommonSeriesSettings>
                    <Series
                        valueField="oranges"
                        argumentField="day"
                        name="My oranges"
                        type="bar"
                        color="#6a6aff" />
                </Chart>
            </div>
        );
    }
}
