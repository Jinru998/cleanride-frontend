import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";

interface  Table1 {
id:number
src:string
name:string
mail:string
color:string
class:string
class1:string
text:string
}
export const  Table1data:  Table1[] =[
{id:1, src:face13, name:'Sukuro Kim', mail:'kimosukuro@gmail.com', color:'success-transparent ', class:'', text:'Active', class1:'online'},
{id:2, src:face6, name:'Hasimna', mail:'hasimna2132@gmail.com', color:'light', class:'text-default', text:'Inactive', class1:'offline'},
{id:3, src:face15, name:'Azimo Khan', mail:'azimokhan421@gmail.com', color:'success-transparent ', class:'', text:'Active', class1:'online'},
{id:4, src:face5, name:'Samantha Julia', mail:'	julianasams143@gmail.com', color:'success-transparent ', class:'', text:'Active', class1:'online'}
];
interface  Table2 {
id:number
src:string
name:string
order:string
date:string
}
export const  Table2data:  Table2[] =[
{id:1, src:face3, order:'#0007', date:'26-04-2022', name:'Mayor Kelly', },
{id:2, src:face6, order:'#0008', date:'	15-02-2022', name:'Wicky Kross', },
{id:3, src:face1, order:'#0009', date:'23-05-2022', name:'Julia Cam', }
];
interface  Table3 {
id:number
src:string
name:string
order:string
date:string
}
export const  Table3data:  Table3[] =[
{id:1, src:face10, order:'#0011', date:'07-01-2022', name:'Helsenky', },
{id:2, src:face14, order:'#0012', date:'18-05-2022', name:'Brodus', },
{id:3, src:face12, order:'#0013', date:'19-03-2022', name:'Chikka Alen', }
];
interface  Table4 {
id:number
src:string
name:string
order:string
date:string
}
export const  Table4data:  Table4[] =[
{id:1, src:face13, order:'#0014', date:'21-02-2022', name:'Sukuro Kim', },
{id:2, src:face11, order:'#0018', date:'26-03-2022', name:'Alex Carey', },
{id:3, src:face2, order:'#0020', date:'14-03-2022', name:'Pamila Anderson', }
];
interface  Table5 {
id:number
src:string
name:string
order:string
date:string
}
export const  Table5data:  Table5[] =[
{id:1, src:face13, order:'2022R-01', date:'27-010-2022', name:'Moracco'},
{id:2, src:face11, order:'2022R-02', date:'28-10-2022', name:'Thornton' },
{id:3, src:face2, order:'2022R-03', date:'22-10-2022', name:'Larry Bird' },
{id:4, src:face2, order:'2022R-04', date:'29-09-2022', name:'Erica Sean' }
];   
interface  Table6 {
 id:number
text1:string
text2:string
text3:string
 }
 export const  Table6data:  Table6[] =[
{id:1, text1:'Mark', text2:'Otto', text3:'@mdo'},
{id:2, text1:'Jacob', text2:'Thornton', text3:'@fat'},
{id:3, text1:'Larry the Bird', text2:'Thornton', text3:'@twitter'}
 ];
 interface  Table7 {
id:number
src:string
name:string
mail:string
date:string
text1:string
text2:string
color:string
class:string
icon:string
}
export const  Table7data:  Table7[] =[
{id:1, src:face15, name:'Mark Cruise', mail:'markcruise24@gmail.com', date:'Jul 26,2022', text1:'IN-2032', text2:'Paid', color:'success-transparent', class:'', icon:'check-fill'},
{id:2, src:face12, name:'Charanjeep', mail:'charanjeep@gmail.in', date:'Mar 14,2022', text1:'IN-2022', text2:'Paid', color:'success-transparent', class:'', icon:'check-fill'},
{id:3, src:face5, name:'Samantha Julie', mail:'julie453@gmail.com', date:'Feb 1,2022', text1:'IN-2014', text2:'Cancelled', color:'danger-transparent', class:'', icon:'close-fill'},
{id:4, src:face11, name:'Simon Cohen', mail:'simon@gmail.com', date:'Apr 24,2022', text1:'IN-2036', text2:'	Refunded', color:'light', class:'text-default', icon:'reply-line'}
];
interface  Table8 {
id:number
name:string
date:string
text:string
}
 export const  Table8data:  Table8[] =[
{id:1, name:'Harshrath', date:'24 May 2022', text:'	#5182-3467'},
{id:2, name:'Zozo Hadid', date:'02 July 2022', text:'#5182-3412'},
{id:3, name:'Martiana', date:'15 April 2022', text:'#5182-3423'},
{id:4, name:'Alex Carey', date:'17 March 2022', text:'#5182-3456'}
];

interface  Table9 {
id:number
name:string
date:string
text:string
btn:string
color:string
}
 export const  Table9data:  Table9[] =[
{id:1, name:'Harshrath', date:'24 May 2022', text:'	#5182-3467', btn:'Pending', color:'primary-light'},
{id:2, name:'Zozo Hadid', date:'02 July 2022', text:'#5182-3412', btn:'Pending', color:'primary-light'},
{id:3, name:'Martiana', date:'15 April 2022', text:'#5182-3423', btn:'Rejected', color:'danger-light'},
{id:4, name:'Alex Carey', date:'17 March 2022', text:'#5182-3456', btn:'Processed', color:'success-light'}
];
interface  Table10 {
id:number
text1:string
text2:string
text3:string
text4:string
}
 export const  Table10data:  Table10[] =[
{id:1, text1:'01', text2:'Manchester', text3:'232', text4:'42%'},
{id:2, text1:'02', text2:'Barcelona', text3:'175', text4:'58%'},
{id:3, text1:'03', text2:'Portugal', text3:'126', text4:'32%'}
];

interface  Table11 {
id:string
name:string
date:string
text:string
class:string
}
export const  Table11data:  Table11[] =[
{id:'1', name:'Zelensky', date:'25-Apr-2021', text:'Paid', class:'success-transparent'},
{id:'2', name:'Kim Jong', date:'29-April-2022', text:'Pending', class:'danger-transparent'},
{id:'3', name:'Obana',   date:'30-Nov-2022', text:'Paid', class:'success-transparent'},
{id:'4', name:'Sean Paul', date:'01-Jan-2022', text:'Paid', class:'success-transparent'},
{id:'5', name:'Karizma', date:'14-Feb-2022', text:'Pending', class:'danger-transparent'}
];

interface  Table12 {
id:number
text:string
color:string
quantity:string
price:string
class1:string
class2:string
name:string
}
export const  Table12data:  Table12[] =[
{id:1, text:'Default', color:'primary-transparent', quantity:'22', price:'$2,012',  class1:'',class2:'',name:'Rita Book'},
{id:2, text:'Primary', color:'primary', quantity:'22', price:'$4,254',  class1:'table-primary',class2:'',name:'Rhoda Report'},
{id:3, text:'Secondary', color:'secondary', quantity:'26', price:'$1,234',  class1:'table-secondary',class2:'',name:'Rita Book'},
{id:4, text:'Success', color:'success', quantity:'42', price:'$2,623',  class1:'table-success',class2:'',name:'Anne Teak'},
{id:5, text:'Danger', color:'danger', quantity:'52', price:'$32,132',  class1:'table-danger',class2:'',name:'Dee End'},
{id:6, text:'Warning', color:'warning', quantity:'10', price:'$1,434',  class1:'table-warning',class2:'',name:'Lee Nonmi'},
{id:7, text:'Info', color:'info', quantity:'63', price:'$1,854',  class1:'table-info',class2:'',name:'Lynne Gwistic'},
{id:8, text:'Light', color:'light', quantity:'05', price:'$823',  class1:'table-light',class2:'text-default',name:'Fran Tick'},
{id:9, text:'Dark', color:'dark', quantity:'35', price:'$1,832',  class1:'table-dark',class2:'',name:'Polly Pipe'}
];

interface  Table13 {
    id:number
    text1:string
    text2:string
    text3:string
    text4:string
    code1:string
    code2: string
    class1: string
    class2: string
    }
    export const  Table13data:  Table13[] =[
  {id:1, text1:'This cell inherits', text2:' from the table', text3:'This cell inherits ', text4:'from the table',class1:'', class2:'', code1:'vertical-align: middle;', code2:'vertical-align: middle;'},
  {id:2, text1:'This cell inherits', text2:'from the table row', text3:'This cell inherits ', text4:'from the table row',class1:'align-bottom', class2:'', code1:'vertical-align: bottom;',  code2:'vertical-align: bottom;'},
  {id:3, text1:'This cell inherits', text2:' from the table', text3:'This cell is aligned to the top.', text4:'',class1:'', class2:'align-top', code1:'vertical-align: middle;', code2:''},
    ];
