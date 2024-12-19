import face3 from "../../../../assets/images/faces/3.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
interface mails{
    id:string
    src:string
    name:string
    title:string
    icon:string
    star:string
    badge:string
    color:string
    class:string
    time:string
    active:string
}
export const Mailsdata:mails[]=[
{id:'1', class:'',src:face5, name:'Sujika', title:'New Project details', time:'1:32PM', icon:'ri-attachment-2 align-middle fs-12', star:'true', badge:'', color:'', active:''},
{id:'2', class:'defaultChecked',src:face12, name:'Michael Jeremy', title:'History of planets are discovered yesterday', time:'10:27AM', icon:'', star:'', badge:'', color:'', active:'active'},
{id:'3', class:'',src:face14, name:'King Berunda', title:'Request for return of item ?', time:'Yesterday, 10:27AM', icon:'', star:'', badge:'Promotion', color:'success', active:''},
{id:'4', class:'defaultChecked',src:face7, name:'Samantha May', title:'Completion of work is pending', time:'24 Oct, 5:45PM', icon:'', star:'', badge:'Social', color:'primary', active:''},
{id:'5', class:'',src:face15, name:'Alex Carey', title:'Most Probable date of project completion', time:'12 Sep, 11:24AM', icon:'', star:'true', badge:'', color:'', active:''},
{id:'6', class:'',src:face16, name:'Dawn Bradshaw ', title:'Personal Mail', time:'11 Sep, 10:32AM', icon:'', star:'true', badge:'Personal', color:'danger', active:''},
{id:'7', class:'',src:face3, name:'Kiara Jah', title:'Applying for bank loan?', time:'08 Aug, 08:12AM', icon:'', star:'', badge:'', color:'', active:''},
{id:'8', class:'',src:face13, name:'David Subhman', title:'Life Insurance Corparation.', time:'16 July, 05:52PM', icon:'', star:'', badge:'', color:'', active:''},
];

interface images{
    id:number
    src:string
    name:string
}
export const Imagesdata:images[]=[
    {id:1, src:face5, name:'Sujika'},
    {id:2, src:face7, name:'Samantha May'},
    {id:3, src:face4, name:'Brenda'},
    {id:4, src:face8, name:'Monika'},
    {id:5, src:face3, name:'Kiara Jah'},
    {id:6, src:face11, name:'Sujika'},
    {id:7, src:face16, name:'Kim Noah'},
    {id:8, src:face10, name:'Professor'},
    {id:9, src:face15, name:'Alex Carey'},
];
