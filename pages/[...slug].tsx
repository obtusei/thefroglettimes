import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'
import Layout from '../components/Layout'

type Props = {}

function News({}: Props) {
  const fontSizes = ['xs','sm','md','lg','xl','2xl','3xl','4xl']
  const [fontSize,setFontSize] = useState(3)
  const fonts:any = [{title:'Sans',handle:() => setFont('sans')},{title:'Serif',handle:() => setFont('serif')},{title:'Mono',handle:() => setFont('mono')}]
  const [font,setFont] = useState('serif')
  return (
    <Layout>
      <div className='flex justify-end p-2'>
        <Dropdown title='Color' items={[{title:'Serif'},{title:'Sans'},{title:'Mono'},]}/>
        <Dropdown title={`Font: ${font}`} items={fonts}/>

        <div className='flex items-center'>
          Size:
          <button className='text-sm hover:bg-gray-400 px-3 py-1 rounded-l-2xl' onClick={() => fontSize > 1 && setFontSize(fontSize-1)}>A</button>
          <button className='text-xl hover:bg-gray-400 px-3 rounded-r-xl' onClick={() => fontSize < 7 && setFontSize(fontSize+1)}>A</button>
        </div>
      </div>
      <div className='p-5'>
        <h1 className='text-4xl font-title font-bold'>The Headline of the News lies here</h1>
        <p className={`text-${fontSizes[fontSize]} font-${font}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in officia tenetur odio ipsam sit ad, dignissimos esse ducimus id laboriosam vero dolore ut temporibus accusantium ipsum, possimus, dolorem nostrum.</p>
      </div>
    </Layout>
  )
}

export default News