import media73 from "../../../../assets/images/media/media-73.jpg";
import media74 from "../../../../assets/images/media/media-74.jpg";
import media75 from "../../../../assets/images/media/media-75.jpg";
import media76 from "../../../../assets/images/media/media-76.jpg";
import media77 from "../../../../assets/images/media/media-77.jpg";
import media78 from "../../../../assets/images/media/media-78.jpg";
import media40 from "../../../../assets/images/media/media-40.jpg";
import media42 from "../../../../assets/images/media/media-42.jpg";
import media61 from "../../../../assets/images/media/media-61.jpg";
import media59 from "../../../../assets/images/media/media-59.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";

interface topics{
    id:number
    src:string
    text:string
}
export const Populartopics :topics[]=[
    {id:1, src:media73, text:'Nature'},
    {id:2, src:media74, text:'Sports'},
    {id:3, src:media75, text:'Food'},
    {id:4, src:media76, text:'Travel'},
    {id:5, src:media77, text:'Fashion'},
    {id:6, src:media78, text:'Animals'}
];
interface topics1{
    id:number
    src1:string
    src2:string
    title:string
    name:string
    time:string
    text:string
}
export const Populartopics1 :topics1[]=[
{id:1, src1:media40, src2:face2, title:'Strawberry juice recipe.', name:'Maria Bose', time:'17,Dec 2022 - 12:32', text:'Want to have something different but healthy to drink? Then look no further!! Strawberry Juice is rich in vitamin C.'},
{id:2, src1:media61, src2:face7, title:'Night Sky is pleasent to watch.', name:'Helsenky', time:'24,Dec 2022 - 14:21', text:'Sky map showing the night sky tonight from any location. What planets are visible tonight? Where is Mars.'},
{id:3, src1:media42, src2:face12, title:'Is fashion industry growing ?', name:'Jason Mama', time:'19,Dec 2022 - 15:48', text:'The holographic principle, theorized to be a property of quantum gravity, postulates that the description.'},
{id:4, src1:media59, src2:face16, title:'Raising sun is a blessing to watch ..', name:'Stuart Hall', time:'13,Dec 2022 - 19:08', text:'Rising Sun is a 1993 American buddy cop crime thriller film directed by Philip Kaufman'}
];
