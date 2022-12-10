import React from 'react'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

  const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]
type Props = {}

function CreateNews({}: Props) {
  return (
    <div>
      <input type="text" placeholder='title' />
      <select>
        <option value="">Math</option>
      </select>
      <select>
        <option value="">Region</option>
      </select>
      <select>
        <option value="">EN</option>
      </select>
      <button>Cancel</button>
      <button>Publish</button>
      <QuillNoSSRWrapper 
        modules={modules} 
        formats={formats} 
        theme="snow"
        placeholder='Write Something Nice Today'

      />
    </div>
  )
}

export default CreateNews