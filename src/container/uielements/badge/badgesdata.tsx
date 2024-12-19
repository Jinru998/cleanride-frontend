interface badge {
  id: number
  heading: string
  color: string
  class: string
}
export const badges: badge[] = [
  { id: 1, heading: 'Primary', color: 'primary', class: '' },
  { id: 2, heading: 'secondary', color: 'secondary', class: '' },
  { id: 3, heading: 'Success', color: 'success', class: '' },
  { id: 4, heading: 'Danger', color: 'danger', class: '' },
  { id: 5, heading: 'Warning', color: 'warning', class: '' },
  { id: 6, heading: 'Info', color: 'info', class: '' },
  { id: 7, heading: 'Light', color: 'light', class: 'text-dark' },
  { id: 8, heading: 'Dark', color: 'dark', class: '' },
];
interface badge1 {
  id: number
  heading: string
  color: string
}
export const badges1: badge1[] = [
  { id: 1, heading: 'Primary', color: 'primary' },
  { id: 2, heading: 'secondary', color: 'secondary' },
  { id: 3, heading: 'Success', color: 'success' },
  { id: 4, heading: 'Danger', color: 'danger' },
  { id: 5, heading: 'Warning', color: 'warning' },
  { id: 6, heading: 'Info', color: 'info' },
  { id: 7, heading: 'orange', color: 'orange' },
  { id: 8, heading: 'purple', color: 'purple' },
];
