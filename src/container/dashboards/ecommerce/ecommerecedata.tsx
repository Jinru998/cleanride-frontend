import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import product1 from "../../../assets/images/ecommerce/jpg/1.jpg";
import product2 from "../../../assets/images/ecommerce/jpg/2.jpg";
import product3 from "../../../assets/images/ecommerce/jpg/3.jpg";
import product4 from "../../../assets/images/ecommerce/jpg/4.jpg";
import product5 from "../../../assets/images/ecommerce/jpg/5.jpg";
import product6 from "../../../assets/images/ecommerce/jpg/6.jpg";
import french from '../../../assets/images/flags/french_flag.jpg';
import spain from '../../../assets/images/flags/spain_flag.jpg';
import argentina from '../../../assets/images/flags/argentina_flag.jpg';
import uae from '../../../assets/images/flags/uae_flag.jpg';
import germany from '../../../assets/images/flags/germany_flag.jpg';
import product36 from "../../../assets/images/ecommerce/png/36.png";
import product37 from "../../../assets/images/ecommerce/png/37.png";
import product38 from "../../../assets/images/ecommerce/png/38.png";
import product39 from "../../../assets/images/ecommerce/png/39.png";
import product40 from "../../../assets/images/ecommerce/png/40.png";

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
export class Earning extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        name: 'Total Orders',
        data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
      }],
      options: {
        chart: {
          events: {
            mounted: (chart:any) => {
              chart.windowResizeHandler();
            }
          },
          type: 'bar',
          height: 200
        },
        grid: {
          borderColor: '#f2f6f7',
        },
        colors: ["rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"],
        plotOptions: {
          bar: {
            columnWidth: '25%',
            distributed: true,
            borderRadius: 7,
          }
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        yaxis: {
          title: {
            style: {
              color: '#adb5be',
              fontSize: '12px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
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
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200} />
      </div>

    );
  }
}

interface orders {
  id: number
  src: string
  product: string
  price: string
  text: string
  class: string
}
export const Recentorders: orders[] = [
  { id: 1, src: product1, product: 'Smart Phone', price: '199.99', text: 'Mobiles', class: 'mb-3' },
  { id: 2, src: product2, product: 'White Headphones', price: '79.49', text: 'Music', class: 'mb-3' },
  { id: 3, src: product3, product: 'Stop Watch', price: '49.29', text: 'Electronics', class: 'mb-3' },
  { id: 4, src: product4, product: 'Kikon Camera', price: '1,699.00', text: 'Electronics', class: 'mb-3' },
  { id: 5, src: product5, product: 'Photo Frame', price: '29.99', text: 'Furniture', class: 'mb-3' },
  { id: 6, src: product6, product: 'Canvas Shoes', price: '89.99', text: 'Footwear', class: 'mb-0' },
];

interface sales {
  id: number
  src: string
  text: string
  price: string
  class1: string
  class2: string
  color: string
}
export const Countries: sales[] = [
  { id: 1, src: french, text: 'France', class1: 'up', class2: 'mb-3', color: 'success', price: '5,932' },
  { id: 2, src: spain, text: 'spain', class1: 'down', class2: 'mb-3', color: 'danger', price: '5,383' },
  { id: 3, src: argentina, text: 'Argentina', class1: 'up', class2: 'mb-3', color: 'success', price: '4,825' },
  { id: 4, src: uae, text: 'Uae', class1: 'up', class2: 'mb-3', color: 'success', price: '4,527' },
  { id: 5, src: germany, text: 'Germany', class1: 'down', class2: 'mb-0', color: 'danger', price: '4,501' }
];

interface overview {
  id: number
  name: string
  src: string
  productid: string
  price: string
  status: string
  sales: string
  text: string
  color: string
}

export const ProductsOverview: overview[] = [
  { id: 1, name: 'Niker College Bag', src: product36, productid: '#1734-9743', price: '$199.99', status: 'Available', sales: '3,903', text: '$67,899.24', color: 'success-transparent' },
  { id: 2, name: 'Dslr Camera (50mm f/1.9 HRM Lens)', src: product37, productid: '#1234-4567', price: '$1,299.99', status: 'Available', sales: '12,435', text: '$3,24,781.92', color: 'success-transparent' },
  { id: 3, name: 'Outdoor Bomber Jacket', src: product38, productid: '#1902-9883', price: '$99.99', status: 'Not Available', sales: '5,143', text: '$76,102.76', color: 'danger-transparent' },
  { id: 4, name: 'Light Blue Teddy', src: product39, productid: '#8745-1232', price: '$79.00', status: 'Limited Deal', sales: '7,183', text: '$78,211.83', color: 'warning-transparent' },
  { id: 5, name: 'Orange Smart Watch (24mm)', src: product40, productid: '#1962-9033', price: '$199.99', status: 'In Offer', sales: '10,287', text: '$2,32,982.99', color: 'primary-transparent' },
];

//
interface selling {
  id: number
  name: string
  src: string
  status: string
  sales: string
  color: string
  text: string
}

export const Productsselling: selling[] = [
  { id: 1, name: 'Ethnic School bag for children (24L)', src: product36, status: 'In Stock', sales: '5,093', color: 'success', text: 'Bags' },
  { id: 2, name: 'Leather jacket for men (S,M,L,XL)', src: product38, status: 'In Stock', sales: '6,890', color: 'success', text: 'Clothing' },
  { id: 3, name: 'Childrens Teddy toy of high quality', src: product39, status: 'Out Of Stock', sales: '5,143', color: 'danger', text: 'Toys' },
  { id: 4, name: 'Orange smart watch with square dial (24mm)', src: product40, status: 'Out Of Stock', sales: '10,234', color: 'danger', text: 'Fashion' }
];
