import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import regions from '../../libs/regions'
import { createNews, createNewsDjango, GetSessionDjango } from '../../utils/userapi'
import { useSession } from 'next-auth/react'
import { GetCategories } from '../../utils/newsapi'
import { ExitFullScreenIcon, FullScreenIcon } from '../../components/Icons'
import Head from 'next/head'

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
  const router = useRouter();
  const [title,setTitle] = useState("")
  const [category,setCategory] = useState("General")
  const [region,setRegion] = useState("General");
  const [imageUrl,setImageUrl] = useState("");
  const [language,setLanguage] = useState(router.locale?.toUpperCase());
  const [content,setContent] = useState("")
  const [showNav,setShowNav] = useState(false)
  const {categories} = GetCategories();
  const {data:session} = useSession();
  // const {userSession:djyango} = GetSessionDjango();
  return (
    <Layout hideNav={showNav} hideFooter={showNav}>
      <Head>
        <title>Create News | The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-4'>
      {/* {djyango ? JSON.stringify(djyango):"login"} */}
      <div className='flex items-start justify-between'>
        <div className='w-full'>
        <input type="text" className='text-3xl border-2 w-1/2 p-2'  placeholder='Enter the title' value={title} onChange={(e) => setTitle(e.target.value)} /><br/><br />
        <input type="text" className='text-xl border-2 w-1/2 p-2'  placeholder='Enter the image url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
      <div className='space-x-6 flex items-center'>
        <button onClick={() => setShowNav(!showNav)}>{!showNav ? <FullScreenIcon/>:<ExitFullScreenIcon/>}</button>
        
        <button className='btn' onClick={() => {
          if (session){
            createNews({title,content,category,imageUrl:imageUrl,region,language,userEmail:session.user?.email})
            alert("Article Created Successfully")
          }
        }}>Publish</button>
      </div>
      </div>
      <div className='p-2 space-x-4'>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {
          categories ? categories?.map((cat:any,index:number) => (
            <option value={cat.title} key={index}>{cat.title}</option>
          )):<></>
        }
      </select>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
      { 
          regions.map((cat,index) => (
            <option key={index} value={cat.title}>{cat.title}</option>
          ))
        }
      </select>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="EN">EN</option>
        <option value="NE">NE</option>
      </select>
      </div>
      
      <QuillNoSSRWrapper 
        modules={modules} 
        formats={formats} 
        theme="snow"
        placeholder='Write Something Nice Today'
        value={content}
        onChange={(value) => setContent(value)}
        className="h-96 dark:fill-white"
      />
    </div>
    </Layout>
  )
}

export default CreateNews