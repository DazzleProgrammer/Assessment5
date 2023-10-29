const ctx = document.getElementById('pie');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Acadmics',
    'Non-Acadmics',
    'Admin', 
    'Others'
     ],
    datasets: [{
      label: 'Employees',
      data: [64, 78, 9 ,15],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderWidth: 1    }]
  },
  options: {
   responsive: true
  }
});

