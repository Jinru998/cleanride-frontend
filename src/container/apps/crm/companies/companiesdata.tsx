import face1 from "../../../../assets/images/faces/1.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import logo1 from "../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../assets/images/company-logos/3.png";
import logo4 from "../../../../assets/images/company-logos/4.png";
import logo5 from "../../../../assets/images/company-logos/5.png";
import logo8 from "../../../../assets/images/company-logos/8.png";
import logo6 from "../../../../assets/images/company-logos/6.png";
import logo7 from "../../../../assets/images/company-logos/7.png";
import logo9 from "../../../../assets/images/company-logos/9.png";
import logo10 from "../../../../assets/images/company-logos/10.png";

interface Company {
    id: string
    src1: string
    src2: string
    name: string
    time: string
    mail: string
    score: string
    cell: string
    badge: string
    text1: string
    text2: string
    text3: string
    text4: string
    color: string
    class: string
}
export const Companydata: Company[] = [
    { id: '1', src1: face4, src2: logo1, name: 'Lisa Convay', time: '24, Jul 2023 - 4:45PM', score: '258', mail: 'sprukotechnologies2981@gmail.com', cell: '1678-28993-223', badge: 'Corporate', text1: 'Spruko Technologies', text2: 'Information Technology', text3: 'New Lead', text4: 'Prospect', color: 'primary-transparent', class: '' },
    { id: '2', src1: face12, src2: logo3, name: 'Jacob Smith', time: '15, Jul 2023 - 11:45AM', score: '335', mail: 'jspiceinfotech289@gmail.com', cell: ' 8122-2342-4453', badge: 'Small Business', text1: 'Spice Infotech', text2: 'Telecommunications', text3: 'Customer', text4: 'Hot Lead', color: 'danger-transparent', class: '' },
    { id: '3', src1: face14, src2: logo4, name: 'Jake Sully', time: '10, Aug 2023 - 3:25PM', score: '685', mail: 'logitecheco789@gmail.com', cell: ' 1902-2001-3023', badge: 'Micro Business', text1: 'Logitech ecostics', text2: 'Logistics', text3: 'Partner', text4: '', color: 'success-transparent', class: '' },
    { id: '4', src1: face6, src2: logo5, name: 'Kiara Advain', time: '18, Aug 2023 - 10:10AM', score: '425', mail: 'initechinfo290@gmail.com', cell: ' 1603-2032-1123', badge: 'Startup', text1: 'Initech Info', text2: 'Information Technology', text3: 'LostCustomer', text4: 'Influencer', color: 'light', class: 'text-default' },
    { id: '5', src1: face8, src2: logo6, name: 'Brenda Simpson', time: '19, Jul 2023 - 12:41PM', score: '516', mail: 'massivedynamic1993@gmail.com', cell: '1129-2302-1092', badge: 'Large Enterprise', text1: 'Massive Dynamic', text2: 'Professional Services', text3: 'Subscriber', text4: 'Partner', color: 'pink-transparent', class: '' },
    { id: '6', src1: face9, src2: logo7, name: 'Json Taylor', time: '14, Aug 2023 - 5:18PM', score: '127', mail: 'globexcorp345@gmail.com', cell: ' 9923-2344-2003', badge: 'Small Business', text1: 'Globex Corporation', text2: 'Education', text3: 'Hot Lead', text4: 'Referral', color: 'danger-transparent', class: '' },
    { id: '7', src1: face15, src2: logo8, name: 'Dwayne Jhonson', time: '12, Jun 2023 - 11:38AM', score: '368', mail: 'acmecorporation78@gmail.com', cell: '7891-2093-1994', badge: 'Corporate', text1: 'Acme Corporation', text2: 'Telecommunications', text3: 'Trial User', text4: 'Cold Lead', color: 'primary-transparent', class: '' },
    { id: '8', src1: face1, src2: logo9, name: 'Emiley Jackson', time: '19, May 2023 - 1:57PM', score: '563', mail: 'soylentcorp678@gmail.com', cell: '	1899-2993-1923', badge: 'Medium Size', text1: 'Soylent Corp', text2: 'Manufacturing', text3: 'Influencer', text4: 'Partner', color: 'warning-transparent', class: '' },
    { id: '9', src1: face3, src2: logo10, name: 'Jessica Morris', time: '28, Jul 2023 - 9:31AM', score: '185', mail: 'umbrellacorp289@gmail.com', cell: ' 1768-2332-4934', badge: 'Micro Business', text1: 'Umbrella Corporation', text2: 'Healthcare', text3: 'New Lead', text4: 'Lost Customer', color: 'success-transparent', class: '' },
    { id: '10', src1: face9, src2: logo2, name: 'Michael Jeremy', time: '28, Jul 2023 - 9:31AM', score: '240', mail: 'hoolitech186@gmail.com', cell: '4788-7822-4786', badge: 'Startup', text1: 'Hooli Technologies', text2: 'Information Technology', text3: 'New Lead', text4: 'Subscriber', color: 'light', class: 'text-default' }
];

export const Selectdata1 = [
    { value: 'Company Size', label: 'Company Size' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Small Business', label: 'Small Business' },
    { value: 'Micro Business', label: 'Micro Business' },
    { value: 'Startup', label: 'Startup' },
    { value: 'Large Enterprise', label: 'Large Enterprise' },
    { value: 'Medium Size', label: 'Medium Size' },
];
export const Selectdata2 = [
    { value: 'Select Insustry', label: 'Select Insustry' },
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Telecommunications', label: 'Telecommunications' },
    { value: 'Logistics', label: 'Logistics' },
    { value: 'Professional Services', label: 'Professional Services' },
    { value: 'Education', label: 'Education' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Healthcare', label: 'Healthcare' }
];
