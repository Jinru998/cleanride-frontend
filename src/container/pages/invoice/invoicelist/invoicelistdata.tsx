import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face4 from "../../../../assets/images/faces/4.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}
export class InvoiceStats extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Total',
                data: [76, 85, 101, 98, 87, 105]
            }, {
                name: 'Paid',
                data: [35, 41, 36, 26, 45, 48]
            }, {
                name: 'Pending',
                data: [44, 55, 57, 56, 61, 58]
            }, {
                name: 'Overdue',
                data: [13, 27, 31, 29, 35, 25]
            }],
            options: {
                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'bar',
                    height: 210,
                    stacked: true
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                        // endingShape: 'rounded',
                    },
                },
                grid: {
                    borderColor: '#f2f5f7',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#4b9bfa", "#28d193", "#ffbe14", "#f3f6f8"],
                stroke: {
                    show: true,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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
                    title: {
                        style: {
                            color: "#8c9097",
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
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands";
                        }
                    }
                }
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={210} width={342} />

        );
    }
}

interface invoices {
    id: number
    src: string
    name: string
    mail: string
    invoiceid: string
    date: string
    amount: string
    badge: string
    color: string
    due: string
}
export const Manageinvoicedata: invoices[] = [
    { id: 1, src: face11, name: 'Json Taylor', mail: 'jsontaylor2416@gmail.com', invoiceid: '#SPK12032901', date: '25,Nov 2022', amount: '$212.45', badge: 'Paid', color: 'success-transparent', due: '25,Dec 2022' },
    { id: 2, src: face7, name: 'Suzika Stallone', mail: 'suzikastallone3214@gmail.com', invoiceid: '#SPK12032912', date: '13,Nov 2022', amount: '$512.99', badge: 'Pending', color: 'warning-transparent', due: '	13,Dec 2022' },
    { id: 3, src: face15, name: 'Roman Killon', mail: 'romankillon143@gmail.com', invoiceid: '#SPK12032945', date: '30,Nov 2022', amount: '$2199.49', badge: 'Overdue', color: 'danger-transparent', due: '30,Dec 2022' },
    { id: 4, src: face12, name: 'Charlie Davieson', mail: 'charliedavieson@gmail.com', invoiceid: '#SPK12032922', date: '	18,Nov 2022', amount: '$1569.99', badge: 'Paid', color: 'success-transparent', due: '	18,Dec 2022' },
    { id: 5, src: face4, name: 'Selena Deoyl', mail: 'selenadeoyl114@gmail.com', invoiceid: '#SPK12032932', date: '	18,Nov 2022', amount: '$4,873.99', badge: 'Due By 1 Day', color: 'primary-transparent', due: '	18,Dec 2022' },
    { id: 6, src: face7, name: 'Kiara Advensh', mail: 'kiaraadvensh87@gmail.com', invoiceid: '#SPK12032978', date: '02,Nov 2022', amount: '$1923.99', badge: 'Paid', color: 'success-transparent', due: '18,Dec 2022' },
    { id: 7, src: face9, name: 'Joseph Samurai', mail: 'josephsamurai@gmail.com', invoiceid: '#SPK12032919', date: '	15,Nov 2022', amount: '$1,623.99', badge: 'Paid', color: 'success-transparent', due: '	15,Dec 2022' },
    { id: 8, src: face13, name: 'Kevin Powell', mail: 'kevinpowell@gmail.com', invoiceid: '#SPK12032931', date: '21,Nov 2022', amount: '$3,423.99', badge: 'Pending', color: 'warning-transparent', due: '21,Dec 2022' },
    { id: 9, src: face8, name: 'Darla Jung', mail: 'darlajung555@gmail.com', invoiceid: '#SPK12032958', date: '15,Oct 2022', amount: '$2,982.99', badge: 'Paid', color: 'success-transparent', due: '	15,Nov 2022' },
];
