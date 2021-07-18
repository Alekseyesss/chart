Highcharts.chart('container', {

  title: {
    text: 'Highcharts pie chart'
  },

  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  series: [{
    type: 'pie',
    allowPointSelect: true,
    keys: ['name', 'y', 'selected', 'sliced'],
    data: [
      ['Deposit of Investor 1', 30, false],
      ['Deposit of Investor 2', 50, false],
      ['Deposit of PAMM-manager', 20, false],
    ],
    showInLegend: true
  }]
});