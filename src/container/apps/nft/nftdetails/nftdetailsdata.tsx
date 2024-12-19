
import image16 from '../../../../assets/images/nft-images/16.png';
import image17 from '../../../../assets/images/nft-images/17.png';
import image18 from '../../../../assets/images/nft-images/18.png';
import image19 from '../../../../assets/images/nft-images/19.png';
import image20 from '../../../../assets/images/nft-images/20.png';
import image21 from '../../../../assets/images/nft-images/21.png';
import image22 from '../../../../assets/images/nft-images/22.png';
interface Table {
  id:number
  src:string
  text1:string
  text2:string
  text3:string
  text4:string
  text5:string
   }
   export const Tabledata: Table[] =[
    {id:1, src:image16, text1:'Neo-Nebulae', text2:'13.2k', text3:'(13,256)', text4:'1.099', text5:'1.759'},
    {id:2, src:image17, text1:'Chromatic Chaos', text2:'5.2k', text3:'(5,289)', text4:'7.99', text5:'12.99'},
    {id:3, src:image18, text1:'Surreal Synthesis', text2:'2.4k', text3:'(2,476)', text4:'1.499', text5:'2.599'},
    {id:4, src:image19, text1:'Virtual Visions', text2:'1.8k', text3:'(1,893)', text4:'2.299', text5:'3.299'},
    {id:5, src:image20, text1:'Pixel Prism', text2:'12.9k', text3:'(12,923)', text4:'8.99', text5:'12.99'},
    {id:6, src:image21, text1:'Electric Euphoria', text2:'4.5k', text3:'(453)', text4:'1.799', text5:'2.499'},
    {id:7, src:image22, text1:'Virtual Veracity', text2:'1.8k', text3:'(1,874)', text4:'2.299', text5:'2.999'}
   ];
   interface Progress {
    id:number
    color:string
    text1:string
    text2:string
    now:string
     }
     export const Progressdata: Progress[] =[
     {id:1, color:'success', text1:'5',text2:'10', now:'55'},
     {id:2, color:'success', text1:'4',text2:'6', now:'22'},
     {id:3, color:'success', text1:'3',text2:'4', now:'8'},
     {id:4, color:'warning', text1:'2',text2:'1', now:'9'},
     {id:5, color:'danger', text1:'1',text2:'1', now:'6'},
     ];
