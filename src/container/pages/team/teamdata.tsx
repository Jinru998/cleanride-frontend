import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import team1 from "../../../assets/images/media/team-covers/1.jpg";
import team2 from "../../../assets/images/media/team-covers/2.jpg";
import team3 from "../../../assets/images/media/team-covers/3.jpg";
import team4 from "../../../assets/images/media/team-covers/4.jpg";
import team5 from "../../../assets/images/media/team-covers/5.jpg";
import team6 from "../../../assets/images/media/team-covers/6.jpg";
import team7 from "../../../assets/images/media/team-covers/7.jpg";
import team8 from "../../../assets/images/media/team-covers/8.jpg";
import team9 from "../../../assets/images/media/team-covers/9.jpg";
interface ui {
    id: number
    src1: string
    src2: string
    name: string
    mail: string
    text1: string
    text2: string
    text3: string
    class: string

}
export const Teamuidata: ui[] = [
    { id: 1, src1: team1, src2: face11, name: 'Alexander Smith', mail: 'alexandersmith2135@gmail.com', text1: '16 Months', text2: '45', text3: 'Member', class: 'warning' },
    { id: 2, src1: team2, src2: face2, name: 'Alicia Sierra', mail: 'aliciasierra1645@gmail.com', text1: '2 Years', text2: '78', text3: 'Associate', class: 'fixed-white' },
    { id: 3, src1: team3, src2: face4, name: 'Angelica Hose', mail: 'angelica143@gmail.com', text1: '12 Months', text2: '35', text3: 'Member', class: 'fixed-white' },
    { id: 4, src1: team4, src2: face10, name: 'Jhope Joseph', mail: 'jhope.joseph@gmail.com', text1: '3 Years', text2: '126', text3: 'Team Lead', class: 'fixed-white' },
    { id: 5, src1: team5, src2: face13, name: 'King Martin', mail: 'martinking1998@gmail.com', text1: '28 Months', text2: '114', text3: 'Member', class: 'warning' },
    { id: 6, src1: team6, src2: face5, name: 'Susan Sane', mail: 'susanasane@gmail.com', text1: '18 Months', text2: '74', text3: 'Member', class: 'fixed-white' },
    { id: 7, src1: team7, src2: face8, name: 'Brenda Hops', mail: 'brrendahops245@gmail.com', text1: '16 Months', text2: '64', text3: 'Member', class: 'fixed-white' },
    { id: 8, src1: team8, src2: face14, name: 'Paul Rudd', mail: 'paulrudd143@gmail.com', text1: '7 Months', text2: '17', text3: 'Member', class: 'fixed-white' },
    { id: 9, src1: team9, src2: face15, name: 'Elisha Jin', mail: 'elishajin@gmail.com', text1: '4 Years', text2: '321', text3: 'Manager', class: 'fixed-white' }
];
