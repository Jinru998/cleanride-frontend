import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face1 from "../../../assets/images/faces/1.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
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

export class Performancebycategory extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Designing',
                data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
            }, {
                name: 'Development',
                data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
            }, {
                name: 'SEO',
                data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
            }],
            options: {

                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'bar',
                    height: 310,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                colors: ["rgba(132, 90, 223, 1)", "rgba(132, 90, 223, 0.5)", "rgba(132, 90, 223, 0.2)"],
                legend: {
                    show: false,
                    position: 'top'
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    opacity: 1
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={310} />
            </div>

        );
    }
}
//
export class JobsSummary extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [1754, 544, 682, 263],
            options: {

                labels: ["Published", "Private", "Closed", "On Hold"],
                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 250,
                    type: 'donut',
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
                            size: '70%',
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
                colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.7)", "rgba(132, 90, 223,0.4)", "rgba(132, 90, 223,0.1)"],
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
interface bills {
    id: number
    invoiceid: string
    src: string
    name: string
    mail: string
    duedate: string
    status: string
    amount: string
    color: string
}
export const Billssummary: bills[] = [
    { id: 1, invoiceid: '#INV111611', src: face1, name: 'Rena Mark', mail: 'renamark123@demo', duedate: '	14-05-2023', status: 'Paid', amount: '$9,523', color: 'success' },
    { id: 2, invoiceid: '#INV111611', src: face4, name: 'Xong Yun', mail: 'xongyun2134@gmail.com', duedate: '14-05-2023', status: 'Pending', amount: '$8,243', color: 'warning' },
    { id: 3, invoiceid: '#INV147852', src: face6, name: 'Kane William', mail: 'william154@demo', duedate: '16-05-2023', status: 'Overdue', amount: '$5,234', color: 'primary' },
    { id: 4, invoiceid: '#INV753159', src: face12, name: 'Stewart Rem', mail: 'remstew092@demo', duedate: '21-05-2023', status: 'Paid', amount: '$7,546', color: 'success' },
    { id: 5, invoiceid: '#INV369874', src: face3, name: 'Elliot Yun', mail: 'eiiliot000@demo', duedate: '	18-05-2023', status: 'Overdue', amount: '$7,541', color: 'warning' },
    { id: 6, invoiceid: '#INV123456', src: face5, name: 'Gretchen Xio', mail: 'gretchenxio999@demo', duedate: '20-05-2023', status: 'Pending', amount: '$2,541', color: 'primary' },
];
export const Selectdata = [
    { value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' }
];
