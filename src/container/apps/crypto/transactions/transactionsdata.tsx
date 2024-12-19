import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import face2 from "../../../../assets/images/faces/2.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";

import bitcoin from "../../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import litecoin from "../../../../assets/images/crypto-currencies/regular/Litecoin.svg";
import ethereum from "../../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import dash from "../../../../assets/images/crypto-currencies/regular/Dash.svg";
import ripple from "../../../../assets/images/crypto-currencies/regular/Ripple.svg";
import golem from "../../../../assets/images/crypto-currencies/regular/Golem.svg";
import monero from "../../../../assets/images/crypto-currencies/regular/Monero.svg";
import euro from "../../../../assets/images/crypto-currencies/regular/Euro.svg";
import zcash from "../../../../assets/images/crypto-currencies/regular/Zcash.svg";
import decred from "../../../../assets/images/crypto-currencies/regular/Decred.svg";
interface spark3 {
  options?: ApexOptions,
  width?: string | number,
  height?: string | number,
  series?: ApexOptions['series'],
  [key: string]: any
  label?: XAxisAnnotations
  endingShape?: string
}
export class TransactionsStatistics extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "New",
          data: [76, 85, 101, 98, 87, 105],
        },
        {
          name: "Pending",
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: "Completed",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "Inprogress",
          data: [13, 27, 31, 29, 35, 25],
        },
      ],
      options: {

        chart: {
          type: "bar",
          height: 210,
          stacked: true,
          events: {
            mounted: (chart:any) => {
              chart.windowResizeHandler();
            }
          },
        },
        
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%",
            //   endingShape: "rounded",
          },
        },
        grid: {
          borderColor: "#f2f5f7",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
        stroke: {
          show: true,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          title: {
            style: {
              color: "#8c9097",
            },
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        fill: {
          opacity: 1,
        },
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={210} />

    );
  }
}

interface History {
  id: number
  src1: string
  src2: string
  name: string
  amount: string
  date: string
  cell: string
  coin: string
  text1: string
  text2: string
  color1: string
  color2: string
  class: string
}
export const Historydata: History[] = [
  { id: 1, src1: face10, src2: bitcoin, class: 'up', color1: 'success', name: 'Json Taylor', cell: '1242232401', coin: 'Bitcoin', date: '	24,Jul 2023 - 4:23PM', amount: '+0.041', text1: 'Texas Steel', text2: 'Success', color2: 'success' },
  { id: 2, src1: face5, src2: dash, class: 'down', color1: 'danger', name: 'Samantha Taylor', cell: '1242232402', coin: 'Dashcoin', date: '20,Jul 2023 - 12:47PM', amount: '-0.284', text1: 'Stuart Little', text2: 'Pending', color2: 'warning' },
  { id: 3, src1: face12, src2: euro, class: 'up', color1: 'success', name: 'Brian Jhonson', cell: '1242232403', coin: 'Euro', date: '14,Aug 2023 - 10:25AM', amount: '	+0.943', text1: 'Melissa Smith', text2: 'Success', color2: 'success' },
  { id: 4, src1: face15, src2: ethereum, class: 'up', color1: 'success', name: 'Liam Anderson', cell: '1242232404', coin: 'Etherium', date: '10,Jul 2023 - 4:14PM', amount: '+0.582', text1: 'Alexander Clark', text2: 'Failed', color2: 'danger' },
  { id: 5, src1: face4, src2: golem, class: 'up', color1: 'success', name: 'Isabella Brown', cell: '1242232405', coin: 'Golem', date: '19,Aug 2023 - 11:35AM', amount: '+0.290', text1: 'Elijah Davis', text2: 'Success', color2: 'success' },
  { id: 6, src1: face7, src2: litecoin, class: 'down', color1: 'danger', name: 'Sophia Lee', cell: '1242232406', coin: 'Litecoin', date: '12,Jun 2023 - 2:45PM', amount: '-0.147', text1: 'Harper Taylor', text2: 'Success', color2: 'success' },
  { id: 7, src1: face6, src2: ripple, class: 'up', color1: 'success', name: 'Evelyn Clark', cell: '1242232407', coin: 'Ripple', date: '27,Jul 2023 - 10:18AM', amount: '+1.05', text1: 'William Brown', text2: 'Success', color2: 'success' },
  { id: 8, src1: face11, src2: monero, class: 'up', color1: 'success', name: 'Liam Anderson', cell: '1242232408', coin: 'Monero', date: '16,Aug 2023 - 9:25PM', amount: '+0.625', text1: 'Amelia Davis', text2: 'Inprogress', color2: 'info' },
  { id: 9, src1: face2, src2: zcash, class: 'down', color1: 'danger', name: 'Harper Taylor', cell: '1242232409', coin: 'Zcash', date: '24,Jul 2023 - 12:47PM', amount: '-0.293', text1: 'Benjamin Martinez', text2: 'Inprogress', color2: 'info' },
  { id: 10, src1: face16, src2: decred, class: 'up', color1: 'success', name: 'Lucas Taylor', cell: '1242232410', coin: 'Decred', date: '24,Jul 2023 - 12:47PM', amount: '+0.893', text1: 'Mia Wilson', text2: 'Success', color2: 'success' },
];
