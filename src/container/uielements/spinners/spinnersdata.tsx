interface Color {
  id:number
  color:string
  }
  export const Colorspinner: Color[] =[
  {id:1,color:'primary'},
  {id:2,color:'secondary'},
  {id:3,color:'success'},
  {id:4,color:'danger'},
  {id:5,color:'warning'},
  {id:6,color:'info'},
  {id:7,color:'light'},
  {id:8,color:'dark'}
  ];
  interface Buttons {
    id:number
    color:string
    class:string
    }
    export const Buttonspinner: Buttons[] =[
    {id:1,color:'primary-light', class:''},
    {id:2,color:'secondary-light', class:''},
    {id:3,color:'success-light', class:''},
    {id:4,color:'info-light', class:''},
    {id:5,color:'warning-light', class:''},
    {id:6,color:'danger-light', class:''},
    {id:7,color:'light', class:''},
    {id:8,color:'dark-light', class:'text-dark'}
    ];
