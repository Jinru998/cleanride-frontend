import  { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import nftimage1 from "../../../assets/images/nft-images/1.png";
import nftimage2 from "../../../assets/images/nft-images/2.png";
import nftimage3 from "../../../assets/images/nft-images/3.png";
import nftimage4 from "../../../assets/images/nft-images/4.png";
import nftimage5 from "../../../assets/images/nft-images/5.png";
import nftimage6 from "../../../assets/images/nft-images/6.png";
import nftimage16 from "../../../assets/images/nft-images/16.png";
import nftimage10 from "../../../assets/images/nft-images/10.png";
import nftimage12 from "../../../assets/images/nft-images/12.png";
import nftimage15 from "../../../assets/images/nft-images/15.png";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
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

export class Totalbalance extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
            }],
            options: {

                chart: {
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'line',
                    height: 40,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2.5,
                    dashArray: 0,
                },
                fill: {

                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["rgb(132, 90, 223)"],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} />
            </div>

        );
    }
}
//
interface auctions {
    id: number
    likes: string
    src1: string
    src2: string
    name: string
    mail: string
    color: string
    bid: string
}

export const Trendingauctions: auctions[] = [
    { id: 1, likes: '1.32k', src1: nftimage2, src2: face10, name: 'Bloom NFT', mail: '@bloom116', color: 'Color Abstrac', bid: '0.19ETH' },
    { id: 2, likes: '1.26k', src1: nftimage3, src2: face5, name: 'Ergos NFT', mail: '@ergos900', color: 'Fluid Abstract', bid: '0.35ETH' },
    { id: 3, likes: '2.45k', src1: nftimage4, src2: face7, name: 'Caros NFT', mail: '@caros002', color: 'Space Fluid', bid: '0.13ETH' },
    { id: 4, likes: '1.57k', src1: nftimage5, src2: face11, name: 'Daron NFT', mail: '@daron789', color: 'Fluid Abstract', bid: '0.75ETH' },
];
//
export class NFTStatistics extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: "Price",
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
            }, {
                name: "Volume",
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
            }],
            options: {
                chart: {
                    height: 343,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    events: {
                        mounted: (chart:any) => {
                          chart.windowResizeHandler();
                        }
                      },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    offsetX: -15,
                    fontWeight: "bold",
                },
                stroke: {
                    curve: 'smooth',
                    dashArray: [0, 5],
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)"],
                yaxis: {
                    title: {
                        text: 'Statistics',
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
                        }
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                        rotate: -90
                    }
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={343} />
            </div>

        );
    }
}
//
interface auctions1 {
    id: number
    src: string
    name: string
    progress: number
    text1: string
    text2: string
    value: string
}

export const TopCollectors: auctions1[] = [
    { id: 1, src: face5, name: 'Alicia Smith', progress: 75, text1: '$9,223.46', text2: '0.214ETH', value: '75%' },
    { id: 2, src: face15, name: 'Alex Carey', progress: 60, text1: '$17,239.09', text2: '1.890ETH', value: '60%' },
    { id: 3, src: face4, name: 'Emiley Jack', progress: 35, text1: '$5,902.83', text2: '1.903ETH', value: '35%' },
    { id: 4, src: face3, name: 'Jessica', progress: 70, text1: '$12,124.34', text2: '0.689ETH', value: '70%' },
    { id: 5, src: face11, name: 'Json Taylor', progress: 90, text1: '$12,124.34', text2: '2.577ETH', value: '90%' },
    { id: 6, src: face2, name: 'Kiara May', progress: 62, text1: '$2,534.56', text2: '0.737ETH', value: '62%' },
    { id: 7, src: face14, name: 'Agire Khan', progress: 85, text1: '$15,236.00', text2: '6.345ETH', value: '85%' }
];

//
interface NFT {
    id: number
    src: string
    name: string
    mail: string
    rank: string
    volume: string
    value1: string
    value2: string
    price: string
    items: string
    color1: string
    color2: string
    class1: string
    class2: string
}

export const TrendingNFTs: NFT[] = [
    { id: 1, src: nftimage1, name: 'Starter Sense NFT', mail: '@irukasensei229', rank: '#1', volume: '2.56ETH', value1: '15.2%', value2: '3.1%', price: '2.31ETH', items: '12.4K', color1: 'text-success', color2: 'text-success', class1: 'up', class2: 'up' },
    { id: 2, src: nftimage2, name: 'Lorem Kekkei', mail: '@clansound209', rank: '#2', volume: '1.25ETH', value1: '3.7%', value2: '0.5%', price: '0.25ETH', items: '10.1K', color1: 'text-success', color2: 'text-danger', class1: 'up', class2: 'down' },
    { id: 3, src: nftimage10, name: 'NFT Uchiha', mail: '@sasukeuhi990', rank: '#3', volume: '2,092ETH', value1: '23.1%', value2: '9.12%', price: '2,000ETH', items: '52.7K', color1: 'text-danger', color2: 'text-success', class1: 'down', class2: 'up' },
    { id: 4, src: nftimage12, name: 'Lorem Ipsum Uch', mail: '@kakashi092', rank: '#4', volume: '36.25ETH', value1: '5.2%', value2: '4.1%', price: '30.12ETH', items: '31.4K', color1: 'text-danger', color2: 'text-danger', class1: 'down', class2: 'down ' },
    { id: 5, src: nftimage15, name: 'Ivan Shomer Har', mail: '@narutouze025', rank: '#5', volume: '12.52ETH', value1: '7.0%', value2: '12.5% ', price: '12.50ETH', items: '121.5K', color1: 'text-success', color2: 'text-success', class1: 'up', class2: ' up ' }
];

//
interface NFT1 {
    id: number
    src: string
    name: string
    mail: string
    value: string
    color: string
    price: string
}

export const TrendingNFTs1: NFT1[] = [
    { id: 1, src: nftimage10, name: 'Kakasha Si', mail: '@sensei011', value: '0.45%', color: 'success', price: '1.75ETH' },
    { id: 2, src: nftimage1, name: 'Oorichimaru lo', mail: '@ooro001', value: '0.24%', color: 'success', price: '1.15ETH' },
    { id: 3, src: nftimage2, name: 'SakuraYM', mail: '@sakura903', value: '0.07%', color: 'danger', price: '1.58ETH' },
    { id: 4, src: nftimage4, name: 'Sasuke Uchiha', mail: '@sasuke777', value: '1.34%', color: 'success', price: '1.19ETH' },
    { id: 5, src: nftimage15, name: 'Naruto Uzumaki', mail: '@naruto111', value: '1.70%', color: 'success', price: '2.45ETH' },
    { id: 6, src: nftimage16, name: 'Kazimo Aruke', mail: '@kazimo900', value: '1.21%', color: 'danger', price: '1.95ETH' },
    { id: 7, src: nftimage6, name: 'Nagiro Ohinavo', mail: '@nagiro096', value: '0.99%', color: 'success', price: '1.12ETH' },
];
