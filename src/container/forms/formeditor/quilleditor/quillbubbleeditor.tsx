import  { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'; // Import Quill Bubble theme styles

interface EditorProps {
  placeholder?: string;
}

interface EditorState {
  editorHtml: string;
  theme: string;
  showToolbar: boolean;
}

const defaultContent = `
  <h4><b className="ql-size-large">Quill Bubble</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <p><br/></p>
  <ol>
      <li className="ql-size-normal">Write text, select and edit with multiple options.</li>
      <li className="">This is quill bubble editor.</li>
      <li className="">Easy to customize and flexible.</li>
  </ol>
  <p><br/></p>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

class Editor1 extends Component<EditorProps, EditorState> {
  private quill: any;

  static modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'blockquote': 'blockquote' }],
      ['bold', 'italic', 'link'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  constructor(props: EditorProps) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: 'bubble', showToolbar: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  componentDidMount() {
    if (this.quill) {
      this.quill.on('selection-change', this.handleSelectionChange);
    }
  }

  handleChange(html: string) {
    this.setState({ editorHtml: html });
  }

  handleSelectionChange(range: { index: number; length: number }) {
    if (range && range.length > 0) {
      this.setState({ showToolbar: true });
    } else {
      this.setState({ showToolbar: false });
    }
  }

  render() {
    return (
      <>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor1.modules}
          ref={(quill) => {
            if (quill) {
              this.quill = quill.getEditor();
            }
          }}
        />
      </>
    );
  }
}

export default Editor1;

