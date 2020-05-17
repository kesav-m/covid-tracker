import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvas/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
  render() {
    const { testsummary } = this.props;
    const sampleTested = [];
    const len = testsummary && testsummary.length;
    for (let i = 0; i < len; i++) {
      const element = testsummary[i];
      const date = element.timestamp.split("T")[0];
      sampleTested.push({
        label: date,
        y: element.totalSamplesTested
      });
    }
    console.log("sample", sampleTested);

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "dark1", "dark2"
      axisY: {
        title: "TestCount",
        includeZero: false
      },
      axisX: {
        title: "Date",
        interval: 2
      },
      data: [
        {
          type: "line",
          toolTipContent: "{y}",
          dataPoints: sampleTested
        }
      ]
    };

    return (
      <div>
        <h2 className="head2">Test Data</h2>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default LineChart;
