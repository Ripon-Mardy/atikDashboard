
    // Agent Performance Line Chart
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineChartCtx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Effective Calls',
            data: [3000, 3500, 2800, 4500, 5000],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Total Calls',
            data: [4000, 4200, 3800, 4800, 5200],
            borderColor: '#6c757d',
            backgroundColor: 'rgba(108, 117, 125, 0.2)',
            fill: true,
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // Total Call Amounts Pie Chart
    const pieChart1Ctx = document.getElementById('pieChart1').getContext('2d');
    new Chart(pieChart1Ctx, {
      type: 'pie',
      data: {
        labels: ['Calls Answered', 'Calls Missed', 'Voicemail'],
        datasets: [{
          data: [2654, 532, 269],
          backgroundColor: ['#007bff', '#ffc107', '#dc3545'],
        }]
      },
      options: {
        responsive: true
      }
    });

    // Total Customers Answer Rate Doughnut Chart
    const doughnutChart1Ctx = document.getElementById('doughnutChart1').getContext('2d');
    new Chart(doughnutChart1Ctx, {
      type: 'doughnut',
      data: {
        labels: ['High Priority', 'Medium Priority', 'Low Priority'],
        datasets: [{
          data: [37, 50, 13],
          backgroundColor: ['#007bff', '#17a2b8', '#6c757d'],
        }]
      },
      options: {
        responsive: true
      }
    });

    // Total Calls Duration Doughnut Chart
    const doughnutChart2Ctx = document.getElementById('doughnutChart2').getContext('2d');
    new Chart(doughnutChart2Ctx, {
      type: 'doughnut',
      data: {
        labels: ['Short Calls', 'Medium Calls', 'Long Calls'],
        datasets: [{
          data: [900, 2234, 4466],
          backgroundColor: ['#ffc107', '#28a745', '#007bff'],
        }]
      },
      options: {
        responsive: true
      }
    });

    // Calls Distribution Pie Chart
    const pieChart2Ctx = document.getElementById('pieChart2').getContext('2d');
    new Chart(pieChart2Ctx, {
      type: 'pie',
      data: {
        labels: ['Unique Destinations', 'Average Calls'],
        datasets: [{
          data: [546, 1597],
          backgroundColor: ['#28a745', '#007bff'],
        }]
      },
      options: {
        responsive: true
      }
    });
