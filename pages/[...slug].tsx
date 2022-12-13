import React, { useState } from 'react'
import { LeaderboardAd, RectangleAd } from '../components/Ads'
import Dropdown, { DropdownTwo } from '../components/Dropdown'
import Layout from '../components/Layout'
import { ModernNewsCard, NewsCard, NewsCardWithImageTop } from '../components/News/Card'
import news from "../libs/news.json"
import Link from 'next/link'
import { CheckIcon, InfoIcon } from '../components/Icons'
import { title } from 'process'
type Props = {}

function News({}: Props) {
  const fontSizes = ['xs','sm','md','lg','xl','2xl','3xl','4xl']
  const [bgColor,setBgColor] = useState('bg-white')
  const colors = [
    {
      title:'Plain White',
      color:'bg-white',
      children:<div className={`w-4 h-4 bg-white border-2`}></div>,
      handle:() => setBgColor('bg-white')
    },
    {
      title:'Light Warm',
      color:'bg-yellow-50',
      children:<div className={`w-4 h-4 bg-yellow-50 border-2`}></div>,
      handle:() => setBgColor('bg-yellow-50')
    },
    {
      title:'Warm',
      color:'bg-yellow-100',
      children:<div className={`w-4 h-4 bg-yellow-100 border-2`}></div>,
      handle:() => setBgColor('bg-yellow-100')
    },
    {
      title:'Bold Warm',
      color:'bg-orange-100',
      children:<div className={`w-4 h-4 bg-orange-100 border-2`}></div>,
      handle:() => setBgColor('bg-red-400')
    },
    {
      title:'Black',
      color:'bg-black',
      children:<div className={`w-4 h-4 bg-black border-2`}></div>,
      handle:() => setBgColor('bg-black text-white fill-white')
    },
    {
      title:'Heavy Warm',
      color:'bg-gray-900',
      children:<div className={`w-4 h-4 bg-gray-900 border-2`}></div>,
      handle:() => setBgColor('bg-gray-900 text-white fill-white')
    }
  ]
  const [fontSize,setFontSize] = useState(3)
  const fonts:any = [{title:'Sans',handle:() => setFont('font-sans')},{title:'Serif',handle:() => setFont('font-serif')},{title:'Mono',handle:() => setFont('font-mono')}]
  const [font,setFont] = useState('Serif')
  return (
    <Layout bg={bgColor}>
      <div className='grid grid-cols-3 p-2'>
        <div className='col-span-3 md:col-span-2 md:border-r-2 border-black dark:border-white'>
          <LeaderboardAd/>
          <div className='flex justify-end p-2'>
            
            <DropdownTwo title={`Color`} items={colors} value={'Plain White'}/>
            <DropdownTwo title={`Font`} items={fonts} value={font}/>

            <div className='flex items-center'>
              Size:
              <button className='text-sm hover:bg-gray-400 px-3 py-1 rounded-l-2xl' onClick={() => fontSize > 1 && setFontSize(fontSize-1)}>A</button>
              <button className='text-xl hover:bg-gray-400 px-3 rounded-r-xl' onClick={() => fontSize < 7 && setFontSize(fontSize+1)}>A</button>
            </div>
          </div>
          <div className='p-5'>
            <p className='py-4 text-xl text-green-600 font-bold'>Politics</p>
            <h1 className='text-5xl font-title font-bold py-4'>The Headline of the News lies here</h1>
            <p className='hover:underline'>By <Link href={`by/abhi`}>Abhishek Bhatta</Link></p>
            <p className='mt-2'>Updated At: 2012-12-29</p>
            <div className='bg-blue-50 mt-2 p-2 flex items-center space-x-4 border-2 text-blue-800 border-blue-500 dark:border-blue-50 rounded-md dark:text-blue-50 dark:bg-sky-900'>
              <InfoIcon/>
              <div>
              <h3 className='font-bold'>Fact Checking</h3>
              <p>This article has been covered by these other reputed sources.</p>
              <ul>
                <li className='text-orange-400 hover:underline'><Link href={""}>Kathmandu Post</Link></li>
              </ul>
              </div>
            </div>
            <p className={`py-5 text-${fontSizes[fontSize]} ${font}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in officia tenetur odio ipsam sit ad, dignissimos esse ducimus id laboriosam vero dolore ut temporibus accusantium ipsum, possimus, dolorem nostrum.</p>
            <LeaderboardAd/>
          </div>
        </div>
        {/* ----------------------- ARKO SECTION ------------------------- */}
        <div className='p-2 col-span-3 md:col-span-1'>
          <RectangleAd/>
          <h3 className='text-2xl font-bold'>Related News</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-1'>
            {
              news.map((content,index) => (
                <div key={index} className=''>
                  <ModernNewsCard
                    image={content.image}
                    title={content.title}
                    description={content.description}
                    publishedAt={content.published_at}
                    author={content.author}
                    imageSize={200}
                  />
                  {
                    index != 2 && <hr />
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default News