import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import nftimage1 from "../../../assets/images/nft-images/1.png";
import nftimage2 from "../../../assets/images/nft-images/2.png";
import nftimage5 from "../../../assets/images/nft-images/5.png";
import nftimage6 from "../../../assets/images/nft-images/6.png";
import nftimage7 from "../../../assets/images/nft-images/7.png";
import nftimage8 from "../../../assets/images/nft-images/8.png";
interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}

export class Earningsreport extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: "Earnings",
                data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
            }, {
                name: "Students",
                data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
            }],
            options: {
                chart: {
                    height: 340,
                    type: "bar",
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1.1, 1.1],
                    show: true,
                    curve: ['smooth', 'smooth'],
                },
                grid: {
                    borderColor: '#f3f3f3',
                    strokeDashArray: 3
                },
                xaxis: {
                    axisBorder: {
                        color: 'rgba(119, 119, 142, 0.05)',
                    },
                },
                legend: {
                    show: false
                },
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                markers: {
                    size: 0
                },
                colors: ["rgb(132, 90, 223)", "#e9e9e9"],
                plotOptions: {
                    bar: {
                        columnWidth: "50%",
                        borderRadius: 2,
                    }
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={340} />
            </div>

        );
    }
}
//
export class Payouts extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Paid',
                data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
                type: 'line',
            }, {
                name: 'UnPaid',
                data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
                type: "line",
            }],
            options: {
                chart: {
                    height: 270,
                    toolbar: {
                        show: false,
                    },
                    background: 'none',
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    dashArray: [0, 5],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
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
                        rotate: -90,
                    }
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={270} />
            </div>

        );
    }
}
//
interface list {
    id: number
    src: string
    name: string
    category: string
    classes: string
    last: string
    instructor: string
    students: string
}
export const Courselist: list[] = [
    { id: 1, src: nftimage1, name: 'Ray Optics & Optical Fibre Master Class', category: 'Science', classes: '20', last: '29-05-2023', instructor: 'Shin Opran', students: '25' },
    { id: 2, src: nftimage2, name: 'Master Linear Alzebra Medium Level', category: 'Mathematics', classes: '90', last: '11-06-2023', instructor: '	Arya Neo', students: '773' },
    { id: 3, src: nftimage8, name: 'Learn How To Trade And Invest For-Absolute Beginners', category: 'Stocks & Trading', classes: '161', last: '10-06-2023', instructor: 'Sia Niu', students: '51' },
    { id: 4, src: nftimage7, name: 'Digital Marketing Course from Scratch', category: 'Marketing', classes: '115', last: '21-06-2023', instructor: 'Stuart George', students: '1,189' },
    { id: 5, src: nftimage5, name: 'Data Structures & Algorithms For Beginners', category: 'Programming', classes: '30', last: '15-06-2023', instructor: 'Boran Ray', students: '3,368' },
    { id: 6, src: nftimage6, name: 'Css Zero to Hero Master Class', category: 'UI/UX', classes: '51', last: '22-06-2023', instructor: 'Burak Oin', students: '252' },
];
