const ctx = document.getElementById('lineChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July', 'August', 'September', 'Octber', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Votes',
      data: [2500, 1953, 2046, 1563, 6161, 9196, 1116, 6116, 4848, 8461, 8418, 2489],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});