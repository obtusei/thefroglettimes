import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import categories from "../../libs/categories.json"
import regions from '../../libs/regions'

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
  const [content,setContent] = useState("<h1>Hello</h1>")
  const [showNav,setShowNav] = useState(false)
  const router = useRouter();
  return (
    <Layout hideNav={showNav} hideFooter={showNav}>
      <div className='p-4'>
      <div className='flex items-center justify-between'>
        <input type="text" className='text-3xl border-2 w-1/2 p-2'  placeholder='Enter the title' />
      <div className='space-x-6'>
        <button onClick={() => setShowNav(!showNav)}>Show Nav</button>
        
        <button className='btn' onClick={() => alert(content)}>Publish</button>
      </div>
      </div>
      <div className='p-2 space-x-4'>
        <select>
        {
          categories.map((cat,index) => (
            <option value={cat.title} key={index}>{cat.title}</option>
          ))
        }
      </select>
      <select>
      { 
          regions.map((cat,index) => (
            <option key={index} value={cat.title}>{cat.title}</option>
          ))
        }
      </select>
      <select>
        <option value="">EN</option>
        <option value="">NE</option>
      </select>
      </div>
      
      <QuillNoSSRWrapper 
        modules={modules} 
        formats={formats} 
        theme="snow"
        placeholder='Write Something Nice Today'
        value={content}
        onChange={(value) => setContent(value)}
        className="h-96"
      />
    </div>
    </Layout>
  )
}

export default CreateNews