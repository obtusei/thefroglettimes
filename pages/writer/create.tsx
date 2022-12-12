import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

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
    <div className='p-4'>
      <div className='flex items-center justify-between'>
        <input type="text" placeholder='Enter the title' />
      <div className='space-x-2'>
        <button>Cancel</button>
        <button className='btn'>Publish</button>
      </div>
      </div>
      <div>
        <select>
        <option value="">Math</option>
      </select>
      <select>
        <option value="">Region</option>
      </select>
      <select>
        <option value="">EN</option>
      </select>
      </div>
      
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