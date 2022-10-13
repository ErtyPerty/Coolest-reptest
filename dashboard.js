/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Friday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
      datasets: [{
        data: [
          1.13,
          1.05,
          1.08,
          1.07,
          1.11,

        ],
        lineTension: 0,
        backgroundColor: 'transparent',
          borderColor: '#FFFF00',
        borderWidth: 4,
          pointBackgroundColor: '#FFFF00'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
