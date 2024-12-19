
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

interface Looping {
    id: string
    src1: string
    src2: string
    name: string
    time: string
    mail: string
    cell: string
    badge: string
    text1: string
    text2: string
    text3: string
    text4: string
    color1: string
    color2: string
    class1: string
    class2: string
}
export const Loopingdata1: Looping[] = [
    { id: '1', src1: face4, src2: logo1, name: 'Lisa Convay', time: '24, Jul 2023 - 4:45PM', mail: 'lisaconvay2981@gmail.com', cell: '1678-28993-223', badge: 'New', text1: 'Spruko Technologies', text2: 'Social Media', text3: 'New Lead', text4: 'Prospect', color1: 'primary', color2: 'primary', class1: '', class2: '' },
    { id: '2', src1: face12, src2: logo3, name: 'Jacob Smith', time: '15, Jul 2023 - 11:45AM', mail: 'jacobsmith289@gmail.com', cell: ' 8122-2342-4453', badge: 'Follow-up', text1: 'Spice Infotech', text2: 'Direct mail', text3: 'Customer', text4: 'Hot Lead', color1: 'primary', color2: 'danger', class1: '', class2: '' },
    { id: '3', src1: face14, src2: logo4, name: 'Jake Sully', time: '10, Aug 2023 - 3:25PM', mail: 'jakesully789@gmail.com', cell: ' 1902-2001-3023', badge: 'Closed', text1: 'Logitech ecostics', text2: 'Blog Articles', text3: 'Partner', text4: '', color1: 'success', color2: '', class1: '', class2: '' },
    { id: '4', src1: face6, src2: logo5, name: 'Kiara Advain', time: '18, Aug 2023 - 10:10AM', mail: 'kiaraadvain290@gmail.com', cell: ' 1603-2032-1123', badge: 'Contacted', text1: 'Initech Info', text2: 'Affiliates', text3: 'LostCustomer', text4: 'Influencer', color1: 'light', color2: 'secondary', class1: 'text-default', class2: '' },
    { id: '5', src1: face8, src2: logo6, name: 'Brenda Simpson', time: '19, Jul 2023 - 12:41PM', mail: 'brendasimpson1993@gmail.com', cell: '1129-2302-1092', badge: 'New', text1: 'Massive Dynamic', text2: 'Organic search', text3: 'Subscriber', text4: 'Partner', color1: 'pink', color2: 'success', class1: '', class2: '' },
    { id: '6', src1: face9, src2: logo7, name: 'Json Taylor', time: '14, Aug 2023 - 5:18PM', mail: 'jsontaylor345@gmail.com', cell: ' 9923-2344-2003', badge: 'Follow-up', text1: 'Globex Corporation', text2: 'Social media', text3: 'Hot Lead', text4: 'Referral', color1: 'danger', color2: 'info', class1: '', class2: '' },
    { id: '7', src1: face15, src2: logo8, name: 'Dwayne Jhonson', time: '12, Jun 2023 - 11:38AM', mail: 'dwayenejhonson78@gmail.com', cell: '7891-2093-1994', badge: 'Closed', text1: 'Acme Corporation', text2: 'Blog Articles', text3: 'Trial User', text4: 'Cold Lead', color1: 'warning', color2: 'purple', class1: '', class2: '' },
    { id: '8', src1: face1, src2: logo9, name: 'Emiley Jackson', time: '19, May 2023 - 1:57PM', mail: 'emileyjackson678@gmail.com', cell: '	1899-2993-1923', badge: 'Disqualified', text1: 'Soylent Corp', text2: 'Organic search', text3: 'Influencer', text4: 'Partner', color1: 'success', color2: 'info', class1: '', class2: '' },
    { id: '9', src1: face3, src2: logo10, name: 'Jessica Morris', time: '28, Jul 2023 - 9:31AM', mail: 'jessicamorris289@gmail.com', cell: ' 1768-2332-4934', badge: 'Qualified', text1: 'Umbrella Corporation', text2: 'Affiliates', text3: 'New Lead', text4: 'Lost Customer', color1: 'primary', color2: 'light', class1: '', class2: 'text-default' },
    { id: '10', src1: face9, src2: logo2, name: 'Michael Jeremy', time: '28, Jul 2023 - 9:31AM', mail: 'michaeljeremy186@gmail.com', cell: '4788-7822-4786', badge: 'Contacted', text1: 'Hooli Technologies', text2: 'Direct mail', text3: 'New Lead', text4: 'Subscriber', color1: 'primary', color2: 'pink', class1: '', class2: '' }
];

export const Data = [
    { value: 'Select Tag', label: 'Select Tag' },
    { value: 'New Lead', label: 'New Lead' },
    { value: 'Prospect', label: 'Prospect' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Hot Lead', label: 'Hot Lead' },
    { value: 'Partner', label: 'Partner' },
    { value: 'LostCustomer', label: 'LostCustomer' },
    { value: 'Influencer', label: 'Influencer' },
    { value: 'Subscriber', label: 'Subscriber' }
];
export const Data1 = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];
export const Data2 = [
    { value: 'Select Status', label: 'Select Status' },
    { value: 'New', label: 'New' },
    { value: 'Follow-up', label: 'Follow-up' },
    { value: 'Closed', label: 'Closed' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Disqualified', label: 'Disqualified' },
    { value: 'Qualified', label: 'Qualified' }
];
