import React, { useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import "../App.css"
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// Apply linear gradient color

function AreaChart({ tempPer3HourArray }) {
    // Function to create linear gradient color
    function createLinearGradient() {
        const ctx = document.createElement('canvas').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 220); // Adjust height as needed
        gradient.addColorStop(0, "rgb(227, 217, 208)"); // Start color
        gradient.addColorStop(1, "rgb(0, 0, 0)");   // End color
        return gradient;
    }

    const options = {
        // width: 900,
        responsive: true,
        height: 300,
        axisY: {
            title: "",
            tickLength: 0,
            lineThickness: 0,
            gridThickness: 0,
            margin: 0,
            labelFormatter: function (e) {
                return "";
            }
        }, axisX: {
            lineThickness: 0,
            tickThickness: 0,
            labelFontColor: "rgba(255, 255, 255, 0.4)",
            labelFontSize: 50,
            labelFontFamily: "M PLUS Rounded 1c",
            valueFormatString: "hh tt",
            interval: 3,
            intervalType: "hour"
        },
        chart: {
            paddingLeft: 0 // Set left margin to 0 to remove extra space
        },
        backgroundColor: "transparent",
        data: [{
            type: "area",
            markerSize: 0,
            xValueType: "dateTime",
            indexLabelFontColor: "rgb(227, 217, 208)",
            dataPoints: [//array
                { x: new Date("2024-04-28T00:00:00"), y: tempPer3HourArray[0], indexLabel: "{y}°", label: "12 am" },
                { x: new Date("2024-04-28T03:00:00"), y: tempPer3HourArray[1], indexLabel: "{y}°", label: "3 am" },
                { x: new Date("2024-04-28T06:00:00"), y: tempPer3HourArray[2], indexLabel: "{y}°", label: "6 am" },
                { x: new Date("2024-04-28T09:00:00"), y: tempPer3HourArray[3], indexLabel: "{y}°", label: "9 am" },
                { x: new Date("2024-04-28T12:00:00"), y: tempPer3HourArray[4], indexLabel: "{y}°", label: "12 pm" },
                { x: new Date("2024-04-28T15:00:00"), y: tempPer3HourArray[5], indexLabel: "{y}°", label: "3 pm" },
                { x: new Date("2024-04-28T18:00:00"), y: tempPer3HourArray[6], indexLabel: "{y}°", label: "6 pm" },
                { x: new Date("2024-04-28T21:00:00"), y: tempPer3HourArray[7], indexLabel: "{y}°", label: "9 pm" },
            ],
            color: createLinearGradient() // Apply linear gradient color
        }]
    };

    return (
        <div style={{ width: '100%' }}>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default AreaChart;


