import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face16 from "../../../assets/images/faces/16.jpg";

import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media46 from "../../../assets/images/media/media-46.jpg";
import media25 from "../../../assets/images/media/media-25.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";

import media4 from "../../../assets/images/media/media-4.jpg";
import media9 from "../../../assets/images/media/media-9.jpg";
import media15 from "../../../assets/images/media/media-15.jpg";

interface Background {
  id: number
  src: string
  text1: string
  text2: string
  color: string
  class: string

}
export const Backgroundcards: Background[] = [
  { id: 1, src: face11, text1: 'Adam Smith', text2: 'Finished by today', color: 'primary', class: 'white' },
  { id: 2, src: face12, text1: 'Elisha Corner', text2: 'Completed 24 days back', color: 'secondary', class: 'white' },
  { id: 3, src: face1, text1: 'Sarah Alina', text2: 'Completed today', color: 'warning', class: 'white' },
  { id: 4, src: face8, text1: 'Monica Karen', text2: 'Pending from 4 days', color: 'info', class: 'white' },
  { id: 5, src: face5, text1: 'Samantha sid', text2: 'In leave for 1 month', color: 'success', class: 'white' },
  { id: 6, src: face14, text1: 'Sebastien steyn', text2: 'Completed by Tomorrow', color: 'danger', class: 'white' },
  { id: 7, src: face13, text1: 'Jacob Smith', text2: 'Finished by 24,Nov', color: 'light', class: 'dark' },
  { id: 8, src: face16, text1: 'Pope Adam', text2: 'Completed on 24,may', color: 'dark', class: 'white' }
];

interface Grid {
  id: number
  src: string
  text1: string

}
export const Gridcards: Grid[] = [
  { id: 1, src: media44, text1: 'Morphology of a typical fruit.' },
  { id: 2, src: media43, text1: 'Research improves ability & agility !' },
  { id: 3, src: media45, text1: 'Most tropical areas are suitable' },
  { id: 4, src: media46, text1: 'Are They seasonal fruits ?' },
];
interface Gridmarkup {
  id: number
  src: string
  text1: string
  color: string

}
export const Gridmarkupcards: Gridmarkup[] = [
  { id: 1, src: media25, text1: 'Product A', color: 'primary' },
  { id: 2, src: media26, text1: 'Product B', color: 'secondary' },
  { id: 3, src: media27, text1: 'Product-C', color: 'light' }
];
interface Mountain {
  id: number
  src: string
  text1: string
  text2: string
  color: string

}
export const Mountaincards: Mountain[] = [
  { id: 1, src: media4, text1: 'Mountains', text2: 'New', color: 'primary' },
  { id: 2, src: media9, text1: 'Hills', text2: 'Hot', color: 'secondary' },
  { id: 3, src: media15, text1: 'Nature', text2: 'Offer', color: 'light' }
];
