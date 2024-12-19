import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
interface avatarsizes {
    id: number
    src: string
    class: string
}
export const Avatarsizes: avatarsizes[] = [
    { id: 1, src: face4, class: 'xs' },
    { id: 2, src: face5, class: 'sm' },
    { id: 3, src: face6, class: 'md' },
    { id: 4, src: face7, class: 'lg' },
    { id: 5, src: face8, class: 'xl' },
    { id: 6, src: face9, class: 'xxl' },
];
interface avataricons {
    id: number
    src: string
    class: string
    color: string
    icon: string
    text: string
}
export const Avataricons: avataricons[] = [
    { id: 1, src: face2, class: 'xs', color: 'success', icon: 'fe fe-camera', text: '2' },
    { id: 2, src: face3, class: 'sm', color: 'secondary', icon: 'fe fe-edit', text: '5' },
    { id: 3, src: face14, class: 'md', color: 'warning', icon: 'fe fe-plus', text: '1' },
    { id: 4, src: face13, class: 'lg', color: 'info', icon: 'fe fe-edit', text: '7' },
    { id: 5, src: face15, class: 'xl', color: 'success', icon: 'fe fe-camera', text: '3' },
    { id: 6, src: face9, class: 'xxl', color: 'danger', icon: 'fe fe-plus', text: '9' }
];
interface indicators {
    id: number
    src: string
    class: string
}
export const Avatarindicators: indicators[] = [
    { id: 1, src: face8, class: 'xs' },
    { id: 2, src: face10, class: 'sm' },
    { id: 3, src: face12, class: 'md' },
    { id: 4, src: face13, class: 'lg' },
    { id: 5, src: face14, class: 'xl' },
    { id: 6, src: face15, class: 'xxl' }
];
interface offline {
    id: number
    src: string
    class: string
}
export const Avataroffline: offline[] = [
    { id: 1, src: face2, class: 'xs' },
    { id: 2, src: face3, class: 'sm' },
    { id: 3, src: face4, class: 'md' },
    { id: 4, src: face5, class: 'lg' },
    { id: 5, src: face6, class: 'xl' },
    { id: 6, src: face7, class: 'xxl' }
];

interface badges {
    id: number
    src: string
    class: string
}
export const Avatarbadges: badges[] = [
    { id: 1, src: face2, class: 'xs' },
    { id: 2, src: face3, class: 'sm' },
    { id: 3, src: face4, class: 'md' },
    { id: 4, src: face5, class: 'lg' },
    { id: 5, src: face6, class: 'xl' },
    { id: 6, src: face7, class: 'xxl' }
];
interface initials {
    id: number
    color: string
    class: string
    text: string
}
export const Avatarinitials: initials[] = [
    { id: 1, color: 'primary', class: 'xs', text: 'XS' },
    { id: 2, color: 'secondary', class: 'sm', text: 'SM' },
    { id: 3, color: 'warning', class: 'md', text: 'MD' },
    { id: 4, color: 'danger', class: 'lg', text: 'LG' },
    { id: 5, color: 'success', class: 'xl', text: 'XL' },
    { id: 6, color: 'info', class: 'xxl', text: 'XXL' }
];
interface stacked {
    id: number
    src: string
}
export const Avatarstacked: stacked[] = [
    { id: 1, src: face2 },
    { id: 2, src: face8 },
    { id: 3, src: face2 },
    { id: 4, src: face10 },
    { id: 5, src: face4 },
    { id: 6, src: face13 },
];
