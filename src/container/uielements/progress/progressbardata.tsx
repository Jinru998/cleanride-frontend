interface Multiple {
  class1: string
  class2: string
  class3: string
  size: string
  now1: number
  now2: number
  now3: number

}
export const Multipleprogress: Multiple[] = [
  { class1: "primary", class2: 'secondary', class3: 'success', now1: 5, now2: 10, now3: 15, size: "xs" },
  { class1: "warning", class2: 'info', class3: 'danger', now1: 10, now2: 15, now3: 20, size: "sm" },
  { class1: "info", class2: 'success', class3: 'primary', now1: 15, now2: 20, now3: 25, size: "" },
  { class1: "purple", class2: 'teal', class3: 'orange', now1: 20, now2: 25, now3: 30, size: "lg" },
  { class1: "success", class2: 'danger', class3: 'warning', now1: 25, now2: 30, now3: 35, size: "xl" },

];

interface CustomProgress2 {
  class: string
  class1: string
  now: number

}
export const CustomProgress2data: CustomProgress2[] = [

  { class: 'primary', now: 50, class1: '' },
  { class: 'secondary', now: 60, class1: '' },
  { class: 'success', now: 70, class1: '' },
  { class: 'info', now: 80, class1: 'info' },
  { class: 'warning', now: 90, class1: 'warning' },
];
interface CustomProgress4 {
  class: string
  class1: string
  text: string
  now: number

}
export const CustomProgress4data: CustomProgress4[] = [
  { class: 'primary-gradient', class1: 'primary', now: 10, text: '10%' },
  { class: 'secondary-gradient', class1: 'secondary', now: 20, text: '20%' },
  { class: 'success-gradient', class1: 'success', now: 40, text: '40%' },
  { class: 'info-gradient', class1: 'info', now: 60, text: '60%' },
  { class: 'warning-gradient', class1: 'warning', now: 80, text: '80%' },
  { class: 'danger-gradient', class1: 'danger', now: 90, text: '90%' },
];

