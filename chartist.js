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

new Chartist.Line('.chart2', data2, options2);
  
});
