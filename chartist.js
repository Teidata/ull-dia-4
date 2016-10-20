$(document).ready(function() {
var data = {
  labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
  series: [{ 
             data: [21, 43, 65, 18, 110, 12]
          }]
};

var options = {}

new Chartist.Line('.chart', data, options);

var data2 = {
  labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
  series: [{ data: [2, 4, 6, 8, 10, 12] }, // ct-series-a
           { data: [1, 2, 3, 4, 5, 6] },   // ct-series-b
           { data: [12, 10, 8, 6, 4, 2] }  // ct-series-c
          ]
};

var options2 = {}

new Chartist.Bar('.chart2', data2, options2);
  
var data3 = {
  series: [20, 10, 30, 40]
}

var options3 = {
  // donut: true,
  // donutWidth: 40,
  // startAngle: 270,
  // total: 200
}

new Chartist.Pie('.chart3', data3, options3);
  


});
