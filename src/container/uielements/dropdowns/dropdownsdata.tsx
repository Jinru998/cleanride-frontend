interface Single {
  class: string
  id: number

}
export const SingleButtons: Single[] = [
  { id: 1, class: 'primary' },
  { id: 2, class: 'secondary' },
  { id: 3, class: 'success' },
  { id: 4, class: 'info' },
  { id: 5, class: 'warning' },
  { id: 6, class: 'danger' }
];

interface Outline {
  class: string
  id: number

}
export const OutlineButtons: Outline[] = [
  { id: 1, class: 'outline-primary' },
  { id: 2, class: 'outline-secondary' },
  { id: 3, class: 'outline-success' },
  { id: 4, class: 'outline-info' },
  { id: 5, class: 'outline-warning' },
  { id: 6, class: 'outline-danger' }
];

interface Split {
  class: string
  id: number

}
export const SplitButtonsdata: Split[] = [
  { id: 1, class: 'primary' },
  { id: 2, class: 'secondary' },
  { id: 3, class: 'info' },
  { id: 4, class: 'success' },
  { id: 5, class: 'warning' },
  { id: 6, class: 'danger' }
];

interface Sizing {
  class: string
  size: string
  text1: string
  text2: string
  id: number

}
export const SizingButtons: Sizing[] = [
  { id: 1, class: 'primary', size: 'lg', text1: 'Large button', text2: 'Large split button' },
  { id: 2, class: 'primary', size: 'sm', text1: 'Small  button', text2: 'Small split button' },
];

interface Autoclose {
  class: string
  text: string
  id: number

}
export const AutocloseButtons: Autoclose[] = [
  { id: 1, class: 'primary', text: 'DEfault dropdown' },
  { id: 2, class: 'secondary', text: 'Clickable  outside' },
  { id: 3, class: 'info', text: 'Clickable  inside' },
  { id: 4, class: 'warning', text: 'Manual  close' },
];

interface Custom {
  class: string
  class1: string
  class2: string
  text: string
  id: number

}
export const CustomButtons: Custom[] = [
  { id: 1, class: 'primary', text: 'Primary', class1: 'menu-primary', class2: '' },
  { id: 2, class: 'secondary', text: 'Secondary', class1: 'menu-secondary', class2: '' },
  { id: 3, class: 'warning', text: 'warning', class2: 'item-warning', class1: '' },
  { id: 4, class: 'info', text: 'info', class2: 'item-info', class1: '' },
  { id: 5, class: 'success', text: 'success', class2: 'light-success', class1: '' },
  { id: 6, class: 'danger', text: 'danger', class2: 'light-danger', class1: '' }
];

interface Ghost {
  class: string
  text: string
  id: number

}
export const GhostButtons: Ghost[] = [
  { id: 1, class: 'primary-ghost', text: 'Primary' },
  { id: 2, class: 'secondary-ghost', text: 'Secondary' },
  { id: 3, class: 'warning-ghost', text: 'warning' },
  { id: 4, class: 'info-ghost', text: 'info' },
  { id: 5, class: 'success-ghost', text: 'success' },
  { id: 6, class: 'danger-ghost', text: 'danger' }
];
interface Alignment {
  class: string
  dir: string
  text: string
  id: number

}
export const AlignmentButtons: Alignment[] = [
  { id: 1, class: 'primary', text: 'Dropdown', dir: '' },
  { id: 2, class: 'secondary', text: 'Right-aligned menu', dir: '' },
  { id: 3, class: 'info', text: 'Left-aligned, right-aligned lg', dir: '' },
  { id: 4, class: 'warning', text: 'Right-aligned, left-aligned lg', dir: '' },
  { id: 5, class: 'success', text: 'Dropstart', dir: 'start' },
  { id: 6, class: 'danger', text: 'Dropend', dir: 'end' },
  { id: 7, class: 'teal', text: 'Dropup', dir: 'up' }
];
