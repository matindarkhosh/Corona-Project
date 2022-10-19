const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
        label: 'TOTAL CASES',
        backgroundColor: '#02BC77',
        borderColor: '#02E4AF', 
        data: [10, 25, 18, 34, 42, 37, 43],
      }]
  };
  const data2 = {
    labels: labels,
    datasets: [{
        label: 'T',
        backgroundColor: '#F85252',
        borderColor: '#F85252', 
        data: [59, 39, 49, 42, 53, 8, 8],
      }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const config2 = {
    type: 'line',
    data: data2,
    options: {}
  };
  const myChart = new Chart(document.getElementById('TotalChart'), config);
  const DeathChart = new Chart(document.getElementById('DeathChart'), config2);