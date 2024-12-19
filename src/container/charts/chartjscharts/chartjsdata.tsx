
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import { Line, Bar, Doughnut, Pie, Scatter, PolarArea, Radar, Bubble } from 'react-chartjs-2';
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//  LineChart
const Option1 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  cutout: 90,
};
const Data1 = {
  type: 'line',
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(132, 90, 223)',
    borderColor: 'rgb(132, 90, 223)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};
export function Chartjsline() {
  return <Line options={Option1} data={Data1} height='300px' />;
}

//  Barchart
const Option2 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
const Data2 = {
  type: 'bar',
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(132, 90, 223, 0.2)',
      'rgba(35, 183, 229, 0.2)',
      'rgba(245, 184, 73, 0.2)',
      'rgba(73, 182, 245, 0.2)',
      'rgba(230, 83, 60, 0.2)',
      'rgba(38, 191, 148, 0.2)',
      'rgba(35, 35, 35, 0.2)'
    ],
    borderColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
      'rgb(245, 184, 73)',
      'rgb(73, 182, 245)',
      'rgb(230, 83, 60)',
      'rgb(38, 191, 148)',
      'rgb(35, 35, 35)'
    ],
    borderWidth: 1
  }]
};
export function Chartjsbar() {
  return <Bar options={Option2} data={Data2} height='300px' />;
}
//pie
const Option3 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
};
const Data3 = {
  type: 'pie',
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
      'rgb(245, 184, 73)'
    ],
    hoverOffset: 4
  }]
};
export function Chartjspie() {
  return <Pie options={Option3} data={Data3} height='300px' />;
}
//donut
const Option4 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
};
const Data4 = {
  type: 'donut',
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
      'rgb(245, 184, 73)'
    ],
    hoverOffset: 4
  }]
};
export function Chartjsdonut() {
  return <Doughnut options={Option4} data={Data4} height='300px' />;
}

//Mixed
const Option5 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
const Data5: any = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: ['10', '20', '30', '40'],
      borderColor: 'rgb(132, 90, 223)',
      backgroundColor: 'rgba(132, 90, 223, 0.2)'
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: ['50', '50', '50', '50'],
      fill: false,
      borderColor: 'rgb(35, 183, 229)'
    }
  ]
};
export function Chartjsmixed() {
  return (
    <Scatter options={Option5} data={Data5} height='300px' />
  );
}
//Polar
const Option6 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },

};
const Data6 = {
  type: 'polarArea',
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(132, 90, 223)',
      'rgb(75, 192, 192)',
      'rgb(245, 184, 73)',
      'rgb(201, 203, 207)',
      'rgb(35, 183, 229)'
    ]
  }]
};
export function Chartjspolar() {
  return (
    <PolarArea options={Option6} data={Data6} height='300px' />
  );
}

//Radar
const Option7 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  elements: {
    line: {
      borderWidth: 3
    }
  }

};
const Data7 = {
  type: 'radar',
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(132, 90, 223, 0.2)',
    borderColor: 'rgb(132, 90, 223)',
    pointBackgroundColor: 'rgb(132, 90, 223)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(132, 90, 223)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(35, 183, 229, 0.2)',
    borderColor: 'rgb(35, 183, 229)',
    pointBackgroundColor: 'rgb(35, 183, 229)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(35, 183, 229)'
  }]
};
export function Chartjsradial() {
  return (
    <Radar options={Option7} data={Data7} height='300px' />
  );
}

//Radar
const Option8: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom'
    }
  }

};
const Data8 = {
  type: 'scatter',
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(132, 90, 223)'
  }],
};
export function Chartjsscatter() {
  return (
    <Scatter options={Option8} data={Data8} height='300px' />
  );
}
//Bubble
const Option9: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  }

};
const Data9 = {
  type: 'bubble',
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(132, 90, 223)'
  }]
};
export function Chartjsbubble() {
  return (
    <Bubble options={Option9} data={Data9} height='300px' />
  );
}
