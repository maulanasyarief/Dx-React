import React, { Component } from 'react';
import Chart, {
    ArgumentAxis,
    CommonSeriesSettings,
    Legend,
    Series,
    Tooltip,
    ValueAxis,
    ConstantLine,
    Label
} from 'devextreme-react/chart';

import { dataProduksi } from './data.js';

const data = dataProduksi.sort(function (a, b) {
    return b.count - a.count;
});

const totalCount = data.reduce(function (prevValue, item) {
    return prevValue + item.count;
}, 0);

let cumulativeCount = 0;

const dataArray = data.map(function (item) {
    cumulativeCount += item.count;
    return {
        produk: item.produk,
        count: item.count,
        cumulativePercentage: Math.round(cumulativeCount * 100 / totalCount)
    };
});

function customizeTooltip(pointInfo) {
    return {
        html:
            `<div>
            <div class="tooltip-header">${pointInfo.argumentText}</div>
                <div class="tooltip-body">
                    <div class="series-name">${pointInfo.points[0].seriesName}:</div>
                    <div class="value-text">${pointInfo.points[0].valueText} Pcs</div>
                    <div class="series-name">${pointInfo.points[1].seriesName}:</div>
                    <div class="value-text">${pointInfo.points[1].valueText}% </div>
                </div>
            </div>`
    };
}

function customizePercentageText({ valueText }) {
    return `${valueText}%`;
}

var sty = {
    // color:#74c983
}

export default class extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="card-title">Grafik LINE & BAR Chart</h4>
                <p className="card-text">Load data From array</p>
                <Chart
                    title="Data Produksi"
                    dataSource={dataArray}
                    palette="Harmony Light"
                    id="chart"
                >
                    <CommonSeriesSettings argumentField="produk" />
                    <Series
                        name="Total Produksi"
                        valueField="count"
                        axis="frequency"
                        type="bar"
                        color="#ffc733"
                    />
                    <Series
                        name="Cumulative Produksi"
                        valueField="cumulativePercentage"
                        axis="percentage"
                        type="spline"
                        color="#74c983"
                    />

                    <ArgumentAxis>
                        <Label overlappingBehavior="stagger" />
                    </ArgumentAxis>

                    <ValueAxis
                        name="frequency"
                        position="left"
                        tickInterval={300}
                    />
                    <ValueAxis
                        name="percentage"
                        position="right"
                        tickInterval={20}
                        showZero={true}
                        valueMarginsEnabled={false}
                    >
                        <Label customizeText={customizePercentageText} />
                        <ConstantLine
                            name="minproduksi"
                            value={80}
                            width={2}
                            color="#fc3535"
                            dashStyle="dash">
                            <Label visible={true} />

                        </ConstantLine>
                    </ValueAxis>

                    <Tooltip
                        enabled={true}
                        shared={true}
                        customizeTooltip={customizeTooltip}
                    />

                    <Legend
                        verticalAlignment="top"
                        horizontalAlignment="center"
                    />
                </Chart>
            </div>
        );
    }
}
