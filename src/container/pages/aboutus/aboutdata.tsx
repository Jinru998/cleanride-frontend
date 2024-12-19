
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
interface team {
    id: number
    name: string
    mail: string
    src: string
}
export const Teamdata: team[] = [
    { id: 1, src: face4, name: 'Samantha Taylor', mail: 'samanthataylor2145@gmail.com' },
    { id: 2, src: face15, name: 'Peter Parker', mail: 'peterparker29@gmail.com' },
    { id: 3, src: face12, name: 'Andrew garfield', mail: 'andrewgarfield98@gmail.com' },
    { id: 4, src: face5, name: 'Elizabeth Rose', mail: 'elizabethrose@gmail.com' },
    { id: 5, src: face11, name: 'Stuart Benny', mail: 'stuartbenny@gmail.com' },
    { id: 6, src: face2, name: 'Sasha Banks', mail: 'sashabanks89@gmail.com' },
    { id: 7, src: face8, name: 'Alicia Keys', mail: 'aliciakeys99@gmail.com' },
    { id: 8, src: face9, name: 'Jason Mama', mail: 'jasonmama143@gmail.com' }
];
