import ecommerceimg1 from "../../../../assets/images/ecommerce/png/1.png";
import ecommerceimg2 from "../../../../assets/images/ecommerce/png/2.png";
import ecommerceimg15 from "../../../../assets/images/ecommerce/png/15.png";
import ecommerceimg3 from "../../../../assets/images/ecommerce/png/3.png";
import ecommerceimg4 from "../../../../assets/images/ecommerce/png/4.png";
import ecommerceimg12 from "../../../../assets/images/ecommerce/png/12.png";
import ecommerceimg13 from "../../../../assets/images/ecommerce/png/13.png";
import ecommerceimg16 from "../../../../assets/images/ecommerce/png/16.png";
import ecommerceimg23 from "../../../../assets/images/ecommerce/png/23.png";
interface list{
id:number
src:string
product:string
category:string
price:string
stock:string
gender:string
seller:string
date:string
selected:string

}
export const Listdata:list[]=[
{id:1, src:ecommerceimg1, product:'DapZem & Co Blue Hoodie', category:'Clothing', price:'$1,299', stock:'283', gender:'Male', seller:'Apilla.co.in', date:'24,Nov 2022 - 04:42PM', selected:''},
{id:2, src:ecommerceimg2, product:'Leather jacket for men', category:'Clothing', price:'$799', stock:'98', gender:'Male', seller:'Donzo Company', date:'18,Nov 2022 - 06:53AM', selected:''},
{id:3, src:ecommerceimg15, product:'Orange Smart Watch', category:'Watches', price:'$349', stock:'1,293', gender:'Male, Female', seller:'SlowTrack Company	', date:'21,Oct 2022 - 11:36AM', selected:''},
{id:4, src:ecommerceimg3, product:'Winter Coat For Women', category:'Watches', price:'$189', stock:'322', gender:'Female', seller:'WoodHill.co.in', date:'16,Oct 2022 - 12:45AM', selected:''},
{id:5, src:ecommerceimg4, product:'Vintage White Full Sleeve Tee-Shirt', category:'Clothing', price:'$2,499', stock:'194', gender:'Male, Female', seller:'Watches.co.in', date:'2,Aug 2022 - 11:21AM', selected:''},
{id:6, src:ecommerceimg13, product:'Orange Watch series (44mm)', category:'Watches', price:'	$899', stock:'267', gender:'Male, Female', seller:'Watches.co.in', date:'05,Sep 2022 - 10:14AM', selected:''},
{id:7, src:ecommerceimg12, product:'Sweater For Women', category:'Clothing', price:'	$499', stock:'143', gender:'Female', seller:'Louie Philippe', date:'18,Nov 2022 - 14:35PM', selected:''},
{id:8, src:ecommerceimg16, product:'Ikonic Smart Watch(40mm)', category:'Watches', price:'$999', stock:'365', gender:'Female', seller:'Kohino.zaps.com', date:'27,Nov 2022 - 05:12AM', selected:''},
{id:9, src:ecommerceimg23, product:'Appole Watch Series 5', category:'Watches', price:'$1,499', stock:'257', gender:'Male, Female', seller:'	Appole Corporation', date:'29,Nov 2022 - 16:32PM', selected:''},
];
