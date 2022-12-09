import React, { useState } from 'react'
import { RectangleAd } from '../components/Ads'
import Dropdown from '../components/Dropdown'
import Layout from '../components/Layout'
import { NewsCard } from '../components/News/Card'

type Props = {}

function News({}: Props) {
  const fontSizes = ['xs','sm','md','lg','xl','2xl','3xl','4xl']
  const colors = ['bg-yellow-50','bg-yellow-100','bg-orange-50','bg-black','bg-yellow-50']
  const [fontSize,setFontSize] = useState(3)
  const fonts:any = [{title:'Sans',handle:() => setFont('sans')},{title:'Serif',handle:() => setFont('serif')},{title:'Mono',handle:() => setFont('mono')}]
  const [font,setFont] = useState('serif')
  return (
    <Layout bg={colors[4]}>
      <div className='grid grid-cols-3 p-2'>
        <div className='col-span-2 border-r-2 border-black'>
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
            <p className='py-4 text-xl text-green-600 font-bold'>Politics</p>
            <h1 className='text-5xl font-title font-bold py-4'>The Headline of the News lies here</h1>
            <p>By Abhishek Bhatta</p>
            <p>2012-12-29</p>
            <p className={`py-5 text-${fontSizes[fontSize]} font-${font}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in officia tenetur odio ipsam sit ad, dignissimos esse ducimus id laboriosam vero dolore ut temporibus accusantium ipsum, possimus, dolorem nostrum.</p>
          </div>
        </div>
        {/* ----------------------- ARKO SECTION ------------------------- */}
        <div className='p-2'>
          <RectangleAd/>
          <h3 className='text-2xl font-bold'>Related News</h3>
          <NewsCard
            image='/img.webp'
            title='HEll from Nepal'
            description='asdas'
            publishedAt='dsdas'
            imageSize={150}
          />
        </div>
      </div>
    </Layout>
  )
}

export default News