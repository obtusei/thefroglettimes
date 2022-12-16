import React, { useState } from 'react'
import Layout from '../../components/Layout'
import ennews from "../.../../../libs/news.json"
import nenews from "../.../../../libs/nenews.json"
import { NewsCard, NewsCardShimmer } from '../../components/News/Card'
import Dropdown from '../../components/Dropdown'
import Image from 'next/image'
import { GetSession } from '../../utils/userapi'
import { useRouter } from 'next/router'
import Head from 'next/head'
type Props = {}

function WriterProfile({}: Props) {
  const [lang,setLang] = useState("EN")
  const router = useRouter()
  const {userSession} = GetSession(true);
  // if (!userSession){
  //   router.push("/")
  // }
  return (
    <Layout>
      <Head>
        <title>Profile | The Froglet Times</title>
        <meta name="description" content="This is online news portal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-5'>
        <div>
        {
          userSession && userSession.imageUrl == "" ? <Image src={userSession.imageUrl} width={400} height={40} className="w-20 h-20 object-cover rounded-full" alt='Avatar'/>:<></>
        }
        <h1 className='text-3xl'>{userSession ? userSession.fullname:""}</h1>
        <h3 className='text-gray-500 dark:text-gray-300'>{userSession ? userSession.bio:""}</h3>
        <h3 className='text-gray-500 dark:text-gray-300'>{userSession ? userSession.email:""}</h3>
        </div>

        <div className='border-t-2 border-gray-400 mt-2 p-2'>
          
          <div className='flex items-center'>
            <h2 className='text-2xl'>Articles</h2>
          </div>
          {
            userSession ? userSession.Article.map((content:any,index:any) => (
              <div key={index} className="col-span-3 sm:col-span-2 md:col-span-1 p-1">
                <NewsCard 
                    id={content.id}
                    title={content.title}
                    description={content.content}
                    image={content.imageUrl}
                    author={content.author}
                    readTime={`${content.readTime || "0"} mins`}
                    imageSize={150}
                    size={"md:text-xl"}
                    publishedAt={content.published_at}
                    />
                <hr />
              </div>
            )):
            [...Array(3)].map((content,index) => (
              <div key={index} className="col-span-3 sm:col-span-2 md:col-span-1 p-1">
                  <NewsCardShimmer withContent withImage/>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default WriterProfile