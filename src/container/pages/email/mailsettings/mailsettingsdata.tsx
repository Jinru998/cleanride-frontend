interface mailsettings{
    id:number
     class:string
     text1:string
     text2:string
}
export const Mailsettingslist :mailsettings[]=[
    {id:1, class:'bi bi-phone me-2 fs-16 align-middle text-muted', text1:'Mobile-LG-1023', text2:'Manchester, UK-Nov 30, 04:45PM'},
    {id:2, class:'bi bi-laptop me-2 fs-16 align-middle text-muted', text1:'Lenovo-1291203', text2:'England, UK-Aug 12, 12:25PM'},
    {id:3, class:'bi bi-laptop me-2 fs-16 align-middle text-muted', text1:'Macbook-Suzika', text2:'Brightoon, UK-Jul 18, 8:34AM'},
    {id:4, class:'bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted', text1:'Apple-Desktop', text2:'Darlington, UK-Jan 14, 11:14AM'}
];
//selectdata
export const Languageoptions=[
    {value:'English', label:'English'},
    {value:'French', label:'French'},
    {value:'Arabic', label:'Arabic'},
    {value:'Hindi', label:'Hindi'},
  
];
export const Countryoptions=[
    {value:'Usa', label:'Usa'},
    {value:'Australia', label:'Australia'},
    {value:'Dubai', label:'Dubai'},
  
];
export const Maximumoptions=[
    {value:'10', label:'10'},
    {value:'50', label:'50'},
    {value:'100', label:'100'},
    {value:'200', label:'200'},
  
];
export const MaxLimitoptions=[
    {value:'3', label:'3'},
    {value:'5', label:'5'},
    {value:'10', label:'10'},
    {value:'20', label:'20'},
  
];
export const Accountoptions=[
    {value:'1 Day', label:'1 Day'},
    {value:'1 Hour', label:'1 Hour'},
    {value:'1 Month', label:'1 Month'},
    {value:'1 Year', label:'1 Year'},
  
];
