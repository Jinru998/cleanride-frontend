import face1 from "../../../assets/images/faces/3.jpg";
import face2 from "../../../assets/images/faces/5.jpg";
import face3 from "../../../assets/images/faces/8.jpg";
import face4 from "../../../assets/images/faces/11.jpg";
import face5 from "../../../assets/images/faces/13.jpg";
import face6 from "../../../assets/images/faces/10.jpg";
import face7 from "../../../assets/images/faces/15.jpg";
import face8 from "../../../assets/images/faces/14.jpg";
interface Default {
  class: string
  text: string
}
export const Defaultalerts: Default[] = [
  { text: " A simple primary alert—check it out!", class: "primary" },
  { text: " A simple secondary alert—check it out!", class: "secondary" },
  { text: " A simple success alert—check it out!", class: "success" },
  { text: " A simple danger alert—check it out!", class: "danger" },
  { text: " A simple warning alert—check it out!", class: "warning" },
  { text: " A simple info alert—check it out!", class: "info" },
  { text: " A simple light alert—check it out!", class: "light" },
  { text: " A simple dark alert—check it out!", class: "dark" },

];

interface Link {
  class: string
  text1: string
  text2: string
  text3: string
}
export const Linkalerts: Link[] = [
  { text1: "A simple primary alert with ", text2: "an example link", text3: "Give it a click if you like", class: "primary" },
  { text1: "A simple secondary alert with", text2: "an example link", text3: "Give it a click if you like", class: "secondary" },
  { text1: "A simple success alert with", text2: "an example link", text3: "Give it a click if you like", class: "success" },
  { text1: "A simple danger alert with ", text2: "an example link", text3: "Give it a click if you like", class: "danger" },
  { text1: "A simple warning alert with ", text2: "an example link", text3: "Give it a click if you like", class: "warning" },
  { text1: "A simple info alert with", text2: "an example link", text3: "Give it a click if you like", class: "info" },
  { text1: "A simple light alert with ", text2: "an example link", text3: "Give it a click if you like", class: "light" },
  { text1: "A simple dark alert with", text2: "an example link", text3: "Give it a click if you like", class: "dark" },

];
interface Solid {
  class: string
  id: number
  text: string

}
export const Solidalerts: Solid[] = [
  { id: 1, text: "A simple solid primary alert-check it out! ", class: "solid-primary" },
  { id: 2, text: "A simple solid secondary alert-check it out!", class: "solid-secondary" },
  { id: 3, text: "A simple solid info alert-check it out!", class: "solid-info" },
  { id: 4, text: "A simple solid warning alert-check it out! ", class: "solid-warning" },
  { id: 5, text: "A simple solid success alert-check it out!", class: "solid-success" },
  { id: 6, text: "A simple solid danger alert-check it out! ", class: "solid-danger" },
  { id: 7, text: "A simple solid light alert-check it out! ", class: "solid-light" },
  { id: 8, text: "A simple solid dark alert-check it out!", class: "solid-dark" },

];
interface Outline {
  class: string
  text: string
  id: number

}
export const Outlinealerts: Outline[] = [
  { id: 1, text: "A simple outline primary alert-check it out! ", class: "outline-primary" },
  { id: 2, text: "A simple outline secondary alert-check it out!", class: "outline-secondary" },
  { id: 3, text: "A simple outline info alert-check it out!", class: "outline-info" },
  { id: 4, text: "A simple outline warning alert-check it out! ", class: "outline-warning" },
  { id: 5, text: "A simple outline success alert-check it out!", class: "outline-success" },
  { id: 6, text: "A simple outline danger alert-check it out! ", class: "outline-danger" },
  { id: 7, text: "A simple outline light alert-check it out! ", class: "outline-light" },
  { id: 8, text: "A simple outline dark alert-check it out!", class: "outline-dark" },

];
interface Shadowsolid {
  class: string
  text: string
  size: string
  id: number

}
export const Shadowsolidalerts: Shadowsolid[] = [
  { id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "sm" },
  { id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "" },
  { id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "lg" },
  { id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "sm" },
  { id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "" },
  { id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "lg" },

];
interface Defaultsolid {
  class: string
  text: string
  size: string

}
export const Defaultsolidalerts: Defaultsolid[] = [
  { text: "A simple solid primary alert with small shadow—check it out! ", class: "primary", size: "sm" },
  { text: "A simple solid primary alert with normal shadow—check it out! ", class: "primary", size: "" },
  { text: "A simple solid primary alert with large shadow—check it out! ", class: "primary", size: "lg" },
  { text: "A simple solid secondary alert with small shadow—check it out!", class: "secondary", size: "sm" },
  { text: "A simple solid secondary alert with normal shadow—check it out!", class: "secondary", size: "" },
  { text: "A simple solid secondary alert with large shadow—check it out!", class: "secondary", size: "lg" },
];

interface Roundedsolidalerts {
  class: string
  text: string
  id: number

}
export const Roundedsolidalerts: Roundedsolidalerts[] = [
  { id: 1, text: "A simple solid rounded primary alert—check it out! ", class: "solid-primary" },
  { id: 2, text: "A simple solid rounded secondary alert—check it out! ", class: "solid-info" },
  { id: 3, text: "A simple solid rounded warning alert—check it out! ", class: "solid-warning" },
  { id: 4, text: "A simple solid rounded danger alert—check it out!", class: "solid-danger" }
];

interface Roundedoutline {
  class: string
  text: string
  id: number

}
export const Roundedoutlinealerts: Roundedoutline[] = [
  { id: 1, text: "A simple outline rounded primary alert—check it out! ", class: "outline-primary" },
  { id: 2, text: "A simple outline rounded secondary alert—check it out! ", class: "outline-info" },
  { id: 3, text: "A simple outline rounded warning alert—check it out! ", class: "outline-warning" },
  { id: 4, text: "A simple outline rounded danger alert—check it out!", class: "outline-danger" }
];
interface Roundedefault {
  class: string
  text: string
  id: number

}
export const Roundedefaultalerts: Roundedefault[] = [
  { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
  { id: 2, text: "A simple rounded secondary alert—check it out! ", class: "info" },
  { id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
  { id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
];

interface Roundewithbtn {
  class: string
  text: string
  id: number

}
export const Roundewithbtnalerts: Roundewithbtn[] = [
  { id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
  { id: 2, text: "A simple rounded secondary alert—check it out! ", class: "info" },
  { id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
  { id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
];
interface additionalcontent {
  class: string
  text1: string
  text2: string
  text3: string
  id: number

}
export const Additionalcontentalerts: additionalcontent[] = [
  { id: 1, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "primary" },
  { id: 2, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "info" },
  { id: 3, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "success" },
  { id: 4, text1: "Thank you for reporting this.", text2: 'We appreciate you to let us know the bug in the template and for warning us about future consequences ', text3: 'Visit for support for queries ?', class: "warning" }
];

interface Imagesalert {
  id: number
  src1: string
  color: string
}
export const Imagealerts: Imagesalert[] = [
  { id: 1, src1: face1, color: 'primary' },
  { id: 2, src1: face2, color: 'secondary' },
  { id: 3, src1: face3, color: 'warning' },
  { id: 4, src1: face4, color: 'danger' },
  { id: 5, src1: face5, color: 'info' },
  { id: 6, src1: face6, color: 'light' },
  { id: 7, src1: face7, color: 'dark' },
];

interface avataralert {
  id: number
  src1: string
  color: string
  class: string
}
export const avatarsizealert: avataralert[] = [
  { id: 1, src1: face1, color: 'primary', class: 'xs' },
  { id: 2, src1: face2, color: 'secondary', class: 'sm' },
  { id: 3, src1: face3, color: 'warning', class: '' },
  { id: 4, src1: face4, color: 'danger', class: 'md' },
  { id: 5, src1: face5, color: 'info', class: 'lg' },
  { id: 6, src1: face8, color: 'dark', class: 'xl' },
];

interface svgalert {
  id: number
  class1: string
  text2: string
  text1: string
  color: string
  class: string
  btn1: string
  btn2: string
}
export const Svgalert: svgalert[] = [
  { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", text1: "Information Alert", text2: 'Information alert to show to information', color: 'primary', btn1: 'cancel', btn2: 'open', class: "secondary" },
  { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", text1: "Confirmed Alert", text2: 'Success alert to show to success message', color: 'secondary', btn1: 'cancel', btn2: 'open', class: "danger" },
  { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", text1: "Warning Alert", text2: 'Warning alert to show warning message', color: 'warning', btn1: 'cancel', btn2: 'open', class: "dark" },
  { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", text1: "Danger Alert", text2: 'Danger alert to show the danger message', color: 'danger', btn1: 'cancel', btn2: 'open', class: "info" },
];
interface svgalert1 {
  id: number
  class1: string
  text2: string
  text1: string
  color: string
  class: string
  btn1: string
  btn2: string
}
export const Svgalert1: svgalert1[] = [
  { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", text1: "Information Alert", text2: 'Information alert to show to information', color: 'primary', btn1: 'cancel', btn2: 'open', class: "" },
  { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", text1: "Confirmed Alert", text2: 'Success alert to show to success message', color: 'secondary', btn1: '', btn2: 'close', class: "" },
  { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", text1: "Warning Alert", text2: 'Warning alert to show warning message', color: 'warning', btn1: 'skip', btn2: 'open', class: "" },
  { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", text1: "Danger Alert", text2: 'Danger alert to show the danger message', color: 'danger', btn1: 'close', btn2: 'continue', class: "" },
];
interface Customizedalert1 {
  id: number
  class1: string
  color: string
}
export const Customizedalert1: Customizedalert1[] = [
  { id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", color: 'primary' },
  { id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: 'secondary', },
  { id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", color: 'warning', },
  { id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", color: 'danger', },
];
