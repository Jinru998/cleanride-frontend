interface background {
    id: number
    class: string
}
export const Backgrounddata: background[] = [
    { id: 1, class: 'bg-primary' },
    { id: 2, class: 'bg-secondary' },
    { id: 3, class: 'bg-warning' },
    { id: 4, class: 'bg-info' },
    { id: 5, class: 'bg-success' },
    { id: 6, class: 'bg-danger' },
    { id: 7, class: 'bg-light' },
    { id: 8, class: 'bg-dark' },
];
interface outline {
    id: number
    class: string
    color: string
}
export const Outlinedata: outline[] = [
    { id: 1, class: 'primary', color: '' },
    { id: 2, class: 'secondary', color: '' },
    { id: 3, class: 'warning', color: '' },
    { id: 4, class: 'info', color: '' },
    { id: 5, class: 'success', color: '' },
    { id: 6, class: 'danger', color: '' },
    { id: 7, class: 'light', color: 'bg-dark' },
    { id: 8, class: 'dark', color: '' },
];
interface other {
    id: number
    color: string
}
export const Othercolors: other[] = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'indigo' },
    { id: 3, color: 'purple' },
    { id: 4, color: 'pink' },
    { id: 5, color: 'red' },
    { id: 6, color: 'orange' },
    { id: 7, color: 'yellow' },
    { id: 8, color: 'green' },
    { id: 9, color: 'teal' },
    { id: 10, color: 'cyan' },
    { id: 11, color: 'gray' },
]; 
