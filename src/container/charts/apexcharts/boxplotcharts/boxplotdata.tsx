import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";

// 
interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations | string
    endingShape?: string
}
export class Basicboxplot extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [
                {
                    type: 'boxPlot',
                    data: [
                        {
                            x: 'Jan 2015',
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: 'Jan 2016',
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: 'Jan 2017',
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: 'Jan 2018',
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: 'Jan 2019',
                            y: [29, 31, 35, 39, 44]
                        },
                        {
                            x: 'Jan 2020',
                            y: [41, 49, 58, 61, 67]
                        },
                        {
                            x: 'Jan 2021',
                            y: [54, 59, 66, 71, 88]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'boxPlot',
                    height: 320,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Basic BoxPlot Chart',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                plotOptions: {
                    boxPlot: {
                        colors: {
                            upper: '#845adf',
                            lower: '#23b7e5'
                        }
                    }
                },
                xaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    }
                }
            }

        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={320} />
            </div>
        );
    }
}
// Boxplotscatter
export class Boxplotscatter extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'box',
                    type: 'boxPlot',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: [29, 31, 35, 39, 44]
                        }
                    ]
                },
                {
                    name: 'outliers',
                    type: 'scatter',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: 32
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: 25
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: 64
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 27
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 78
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: 15
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'boxPlot',
                    height: 320,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                colors: ['#845adf', '#23b7e5'],
                grid: {
                    borderColor: '#f2f5f7',
                },
                title: {
                    text: 'BoxPlot - Scatter Chart',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                plotOptions: {
                    boxPlot: {
                        colors: {
                            upper: '#845adf',
                            lower: '#23b7e5'
                        }
                    }
                },
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        formatter: function (val) {
                            return new Date(val).getFullYear().toString();
                        }
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    }
                },
                tooltip: {
                    shared: false,
                    intersect: true
                }
            }

        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={320} />
            </div>
        );
    }
}
// Boxplothorizontal
export class Boxplothorizontal extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [
                {
                    data: [
                        {
                            x: 'Category A',
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: 'Category B',
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: 'Category C',
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: 'Category D',
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: 'Category E',
                            y: [29, 31, 35, 39, 44]
                        },
                        {
                            x: 'Category F',
                            y: [41, 49, 58, 61, 67]
                        },
                        {
                            x: 'Category G',
                            y: [54, 59, 66, 71, 88]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'boxPlot',
                    height: 320,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                title: {
                    text: 'Horizontal BoxPlot Chart',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '50%'
                    },
                    boxPlot: {
                        colors: {
                            upper: '#e9ecef',
                            lower: '#f8f9fa'
                        }
                    }
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                xaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    }
                },
                stroke: {
                    colors: ['#6c757d']
                }
            }

        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={320} />
            </div>
        );
    }
}
