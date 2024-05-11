document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar', // Specify 'bar' type for a bar chart
    data: {
      labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'], // Categories
      datasets: [{
        label: 'Number of Votes',
        data: [12, 19, 3, 5, 2, 3], // Data points for each category
        backgroundColor: [ // Colors for each bar
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y', // Setting the bars to be horizontal
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { // The scale for the horizontal axis must now accommodate numerical values
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Number of Votes by Color'
        }
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myChart1').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar', // Base chart type is bar for stacked bars
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'line', // Specify line type for the line dataset
        label: 'Dataset 1',
        data: [180, 120, 125, 100, 80, 95, 130],
        backgroundColor: 'rgb(54, 162, 235)', // Line color
        borderColor: 'rgb(54, 162, 235)',
        fill: false, // Do not fill under the line
        tension: 0.4,
        yAxisID: 'y', // Use the same Y axis as the bar chart
      }, {
        label: 'Dataset 2',
        data: [60, 20, 45, 75, 20, 30, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Bar color
        yAxisID: 'y',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stacked: true, // Stacks the bars on top of each other
        },
        x: {
          stacked: true, // Ensures that bars are stacked on the x-axis
        }
      },
      plugins: {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Chart.js Stacked Line/Bar Chart'
        }
      }
    }
  });
});
