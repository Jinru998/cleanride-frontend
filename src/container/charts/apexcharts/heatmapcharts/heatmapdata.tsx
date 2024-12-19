import  { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
// Revenue Statistics
interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}

function generateData(count: any, yrange: any) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = 'w' + (i + 1).toString();
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}
export class Basiheatmap extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Metric1',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric2',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric3',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric4',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric5',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric6',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric7',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric8',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric9',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#845adf"],
                grid: {
                    borderColor: '#f2f5f7',
                },
                title: {
                    text: 'HeatMap Chart (Single color)',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />

        );
    }
}
//Multiseriesheatmap
const data = [
    {
        name: 'W1',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W2',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W3',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W4',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W5',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W6',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W7',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W8',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W9',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W10',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W11',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W12',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W13',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W14',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'W15',
        data: generateData(8, {
            min: 0,
            max: 90
        })
    }
];
data.reverse();
const colors = ["#845adf", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'];
colors.reverse();

export class Multiseriesheatmap extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: data,
            options: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false
                },
                colors: colors,
                xaxis: {
                    type: 'category',
                    categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
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
                title: {
                    text: 'HeatMap Chart (Different color shades for each series)',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                grid: {
                    padding: {
                        right: 20
                    },
                    borderColor: '#f2f5f7',
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />

        );
    }
}

//color range
export class Colorrange extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Jan',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Feb',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Mar',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Apr',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'May',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jun',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jul',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Aug',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Sep',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        radius: 0,
                        useFillColorAsStroke: true,
                        colorScale: {
                            ranges: [{
                                from: -30,
                                to: 5,
                                name: 'low',
                                color: '#845adf'
                            },
                            {
                                from: 6,
                                to: 20,
                                name: 'medium',
                                color: '#23b7e5'
                            },
                            {
                                from: 21,
                                to: 45,
                                name: 'high',
                                color: '#f5b849'
                            },
                            {
                                from: 46,
                                to: 55,
                                name: 'extreme',
                                color: '#49b6f5'
                            }
                            ]
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    borderColor: '',
                },
                stroke: {
                    width: 1
                },
                title: {
                    text: 'HeatMap Chart with Color Range',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />

        );
    }
}
//Shadesheatmap
export class Shadesheatmap extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Metric1',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric2',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric3',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric4',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric5',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric6',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric7',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric8',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric8',
                data: generateData(20, {
                    min: 0,
                    max: 90
                })
            }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    width: 0
                },
                plotOptions: {
                    heatmap: {
                        radius: 30,
                        enableShades: false,
                        colorScale: {
                            ranges: [{
                                from: 0,
                                to: 50,
                                color: '#845adf'
                            },
                            {
                                from: 51,
                                to: 100,
                                color: '#23b7e5'
                            },
                            ],
                        },

                    }
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#fff']
                    }
                },
                xaxis: {
                    type: 'category',
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
                title: {
                    text: 'Rounded (Range without Shades)',
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />

        );
    }
}
