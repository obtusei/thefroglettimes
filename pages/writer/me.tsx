import React, { useState } from 'react'
import Layout from '../../components/Layout'
import ennews from "../.../../../libs/news.json"
import nenews from "../.../../../libs/nenews.json"
import { NewsCard } from '../../components/News/Card'
import Dropdown from '../../components/Dropdown'
type Props = {}

function WriterProfile({}: Props) {
  const [lang,setLang] = useState("EN")
  return (
    <Layout>
      <div className='p-5'>
        <div>

        <h1 className='text-3xl'>Abhishek bhatta</h1>
        <h3 className='text-gray-500 dark:text-gray-300'>abhishekbhatta@gmail.com</h3>
        </div>

        <div className='border-t-2 border-gray-400 mt-2 p-2'>
          
          <div className='flex items-center'>
            <h2 className='text-2xl'>Articles</h2>
            <Dropdown title={lang} items={[{title:"EN",handle:() => setLang("EN")},{title:"NE",handle:() => setLang("NE")}]}/>
          </div>
          {
            lang === "EN" ?
            ennews.map((content,index) => (
              <div key={index} className="col-span-3 sm:col-span-2 md:col-span-1 p-1">
                <NewsCard 
                    title={content.title}
                    image={content.image}
                    author={content.author}
                    readTime={'9 mins'}
                    imageSize={150}
                    size={"md:text-xl"}
                    publishedAt={content.published_at}
                    />
                <hr />
              </div>
            )):
            nenews.map((content,index) => (
              <div key={index} className="col-span-3 sm:col-span-2 md:col-span-1 p-1">
                <NewsCard 
                    title={content.title}
                    image={content.image}
                    author={content.author}
                    readTime={'9 mins'}
                    imageSize={150}
                    size={"md:text-xl"}
                    publishedAt={content.published_at}
                    />
                <hr />
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default WriterProfile