import  { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face4 from "../../../assets/images/faces/4.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import french from "../../../assets/images/flags/french_flag.jpg";
import usa from "../../../assets/images/flags/us_flag.jpg";
import uae from "../../../assets/images/flags/uae_flag.jpg";
import germany from "../../../assets/images/flags/germany_flag.jpg";
import argentina from "../../../assets/images/flags/argentina_flag.jpg";
import companylogo8 from "../../../assets/images/company-logos/8.png";
import companylogo10 from "../../../assets/images/company-logos/10.png";
import companylogo1 from "../../../assets/images/company-logos/1.png";
import companylogo4 from "../../../assets/images/company-logos/4.png";
// 
interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}

export class Candidatesdata extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [1754, 1234],
            options: {

                labels: ["Female", "Male"],
                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 250,
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '80%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
            </div>

        );
    }
}
//
export class Subscriptions extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: "Basic",
                data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53]
            },
            {
                name: "Pro",
                data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82]
            }
            ],
            options: {

                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    toolbar: {
                        show: false
                    },
                    height: 285,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.15
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [2, 2],
                    curve: ['smooth', 'smooth'],
                    lineCap: 'butt',
                    dashArray: [0, 0]
                },
                title: {
                    text: undefined,
                },
                legend: {
                    show: true,
                    position: 'top',
                    horizontalAlign: 'center',
                    fontWeight: 600,
                    fontSize: '11px',
                    tooltipHoverFormatter: function (val, opts) {
                        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
                    },
                    labels: {
                        colors: '#74767c',
                    },
                    markers: {
                        width: 7,
                        height: 7,
                        strokeWidth: 0,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                markers: {
                    discrete: [{
                        seriesIndex: 0,
                        dataPointIndex: 5,
                        fillColor: '#305cfc',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 0,
                        dataPointIndex: 11,
                        fillColor: '#305cfc',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 10,
                        fillColor: '#23b7e5',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    }, {
                        seriesIndex: 1,
                        dataPointIndex: 4,
                        fillColor: '#23b7e5',
                        strokeColor: '#fff',
                        size: 4,
                        shape: "circle"
                    }],
                    hover: {
                        sizeOffset: 6
                    }
                },
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        },
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                        '10 Jan', '11 Jan', '12 Jan'
                    ],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        }
                    ]
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={280} />
            </div>

        );
    }
}

//
interface Employers {
    id: string
    src: string
    name: string
    role: string
    place: string
    mail: string
    location: string
    date: string
    color: string
    checked: string
}
export const Recentemployers: Employers[] = [
    { id: '1', src: face4, name: 'Mayor Kelly', role: 'Team Lead', place: 'Manufacture', mail: 'mayorkelly@gmail.com', location: 'Germany', date: 'Sep 15 - Oct 12, 2023', color: 'primary-transparent', checked: '' },
    { id: '2', src: face15, name: 'Andrew Garfield', role: 'Director', place: 'Development', mail: 'andrewgarfield@gmail.com', location: 'Canada', date: 'Apr 10 - Dec 12, 2023', color: 'secondary-transparent', checked: 'defaultChecked' },
    { id: '3', src: face11, name: 'Simon Cowel', role: 'Manager', place: 'Service', mail: 'simoncowel234@gmail.com', location: 'Europe', date: 'Sep 15 - Oct 12, 2023', color: 'success-transparent', checked: '' },
    { id: '4', src: face8, name: 'Mirinda Hers', role: 'Employee', place: 'Marketing', mail: 'mirindahers@gmail.com', location: 'USA', date: 'Apr 10 - Dec 12, 2023', color: 'danger-transparent', checked: 'defaultChecked' },
    { id: '5', src: face16, name: 'Andrew Garfield', role: 'Director', place: 'Development', mail: '	andrewgarfield@gmail.com', location: 'London', date: 'Jun 10 - Dec 12, 2022', color: 'warning-transparent', checked: 'defaultChecked' },
];

//
interface Registers {
    id: number
    src: string
    city: string
    date: string
    total: string
}
export const Registersbycountry: Registers[] = [
    { id: 1, src: usa, city: 'U.S.A', date: '21,Dec 2022', total: '782' },
    { id: 2, src: french, city: 'France', date: '29,April 2023', total: '53' },
    { id: 3, src: uae, city: 'U.A.E', date: '30,Nov 2023', total: '15' },
    { id: 4, src: germany, city: 'Germany', date: '18,Mar 2023', total: '19' },
    { id: 5, src: argentina, city: 'Argentina', date: '25,Apr 2023', total: '92' }
];
interface Top {
    id: number
    src: string
    text1: string
    text2: string
    color: string
    date: string
    total: string
}
export const TopCompanies: Top[] = [
    { id: 1, src: companylogo4, text1: 'Obligation Pvt.Ltd', text2: 'Basic', color: 'primary-transparent', date: '24,Nov 2021', total: '547' },
    { id: 2, src: companylogo10, text1: 'Voluptatem Pvt.Ltd', text2: 'Pro', color: 'secondary-transparent', date: '13,Jan 2020', total: '223' },
    { id: 3, src: companylogo8, text1: 'BloomTech.Inc', text2: 'Basic', color: 'primary-transparent', date: '06,Sep 2020', total: '189' },
    { id: 4, src: companylogo1, text1: 'Beatae Industries', text2: 'Basic', color: 'primary-transparent', date: '19,Mar 2020', total: '106' }
];
