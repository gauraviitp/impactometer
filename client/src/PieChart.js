import React, { useEffect } from "react";

function drawChart(optionsData, selectedOption, id) {
  console.log(selectedOption);

  var data = new window.google.visualization.DataTable();
  data.addColumn("string", "Option text");
  data.addColumn("number", "Percentage");

  let points = [];
  for (let option of optionsData) {
    points.push([option.text, option.percentage]);
  }

  data.addRows(points);

  var options = {
    legend: "none",
    pieSliceText: "label",
    slices: {
      [selectedOption]: { offset: 0.3 },
    },
  };

  var chart = new window.google.visualization.PieChart(
    document.getElementById(id)
  );

  chart.draw(data, options);
}

const PieChart = (props) => {
  console.log(props);

  useEffect(() => {
    window.google.charts.load("current", { packages: ["corechart"] });
    window.google.charts.setOnLoadCallback(() =>
      drawChart(props.options, props.selectedOption, props.id)
    );
  });

  if (props.selectedOption >= 0) {
    return <div className="pie-chart" id={props.id}></div>;
  } else {
    return <></>;
  }
};

export default PieChart;
