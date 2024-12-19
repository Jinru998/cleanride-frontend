import filemanager1 from "../../../assets/images/media/file-manager/1.png";
import filemanager3 from "../../../assets/images/media/file-manager/3.png";

interface Sub {
  id: string
  class: string
  text: string
}
export const Subtaskdata: Sub[] = [
  { id: '1', class: 'defaultChecked', text: 'Conduct Website Design Analysis' },
  { id: '2', class: '', text: 'Collaborate with UI/UX Team' },
  { id: '3', class: '', text: 'Refine Design Iteratively' },
  { id: '4', class: '', text: 'Implement Design Changes' },
  { id: '5', class: 'defaultChecked', text: 'Test Responsive and Cross-Browser Compatibility' },
  { id: '6', class: 'defaultChecked', text: 'Review and Polish Design Elements' },
  { id: '7', class: 'defaultChecked', text: 'Incorporate Branding Elements' },
  { id: '8', class: '', text: 'Documentation and Handover' }
];
interface Attach {
  id: number
  src: string
  text1: string
  text2: string
  class: string

}
export const Attachmentdata: Attach[] = [
  { id: 1, src: filemanager1, text1: 'Full Project', text2: '0.45MB', class: 'p-2' },
  { id: 2, src: filemanager3, text1: 'assets.zip', text2: '0.99MB', class: '' },
  { id: 3, src: filemanager1, text1: 'image-1.png', text2: '245KB', class: 'p-2' },
  { id: 4, src: filemanager3, text1: 'documentation.zip', text2: '2MB', class: '' },
  { id: 5, src: filemanager3, text1: 'landing.zip', text2: '3.46MB', class: '' }
];
