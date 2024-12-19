import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face15 from "../../../assets/images/faces/15.jpg";

interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}

export class Salesoverview extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Sales',
                data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
            }, {
                name: 'OPEX Ratio',
                data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
            }, {
                name: 'General & Admin',
                data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
            }, {
                name: 'Marketing',
                data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
            }],
            options: {
                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    stacked: true,
                    type: 'bar',
                    height: 325,
                },
                grid: {
                    borderColor: '#f5f4f4',
                    strokeDashArray: 5
                },
                colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.6)", "rgba(132, 90, 223, 0.3)", "#ebeff5"],
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: -100,
                                to: -46,
                                color: '#ebeff5'
                            }, {
                                from: -45,
                                to: 0,
                                color: '#ebeff5'
                            }]
                        },
                        columnWidth: '20%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                yaxis: {
                    title: {
                        text: 'Growth',
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        }
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90
                    }
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={325} />
            </div>

        );
    }
}

//
export class Salevalue extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [60],
            options: {
                
                chart: {
                    height: 225,
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: "radialBar",
                },
                colors: ["rgb(132, 90, 223)"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#fff"
                        },
                        track: {
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                blur: 2,
                                opacity: 0.15
                            }
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "16px",
                                show: false
                            },
                            value: {
                                color: "#4b9bfa",
                                fontSize: "30px",
                                show: true
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Cart"]
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={225} />
            </div>

        );
    }
}

//
interface orders {
    id: number
    orderid: string
    src: string
    name: string
    quantity: string
    price: string
    status: string
    date: string
    color: string
}

export const Trendingorders: orders[] = [
    { id: 1, orderid: '#1537890', src: face15, name: 'Simon Cowall', quantity: '1', price: '$4320.29', status: 'Shipped', date: '25,Nov 2022', color: 'success' },
    { id: 2, orderid: '#1539078', src: face4, name: 'Meisha Kerr', quantity: '1', price: '$6745.99', status: 'Cancelled', date: '29,Nov 2022', color: 'danger' },
    { id: 3, orderid: '#1539832', src: face5, name: 'Jessica', quantity: '2', price: '$1176.89', status: 'Under Process', date: '04,Dec 2022', color: 'info' },
    { id: 4, orderid: '#1539832', src: face6, name: 'Amanda B', quantity: '1', price: '$1899.99', status: 'Shipped', date: '10,Dec 2022', color: 'success' },
    { id: 5, orderid: '#1538267', src: face11, name: 'Jason Stathman', quantity: '1', price: '$1867.29', status: 'Pending', date: '18,Dec 2022', color: 'warning' },
    { id: 6, orderid: '#1537890', src: face13, name: 'Khabib Hussain', quantity: '1', price: '$2439.99', status: 'Success', date: '24,Dec 2022', color: 'success' },
];
