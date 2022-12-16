import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ConvertTime } from '../../libs/timeConvert'
import {convert} from "html-to-text"

type Props = {
  id:string,
  title:string,
  description?:string,
  author?:string,
  readTime?:string
  image?:string,
  imageSize?:number,
  size?:string,
  category?:string,
  publishedAt:string,
  reverse?:boolean
}

export function NewsCard({id,title,description,image,imageSize,author,readTime,size,publishedAt,category,reverse}: Props) {
  const date = new Date(publishedAt).toDateString()
  const router = useRouter();
  return (
    <div className={`flex ${reverse ? "md:flex-row-reverse":"md:flex-row"} items-start space-x-3 `}>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={20} className='w-52 h-40 object-cover' alt="sadsa"/>}
        <div className=''>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-2xl"} ${router.locale == "ne" ? "font-devhead":"font-title"} hover:underline`}><Link href={`/${id}`}>{title}</Link></h3>
          {description && <p className={`text-gray-500 line-clamp-3 md:line-clamp-4 ${router.locale == "ne" ? "font-devbody text-xl mt-2 font-medium leading-5":"font-body"}`}>{convert(description)}</p>}
          <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p>
        </div>
    </div>
  )
}


export function ModernNewsCard({title,description,image,imageSize,author,readTime,size,publishedAt,category,reverse,id}: Props) {
  const date = new Date(publishedAt).toDateString()
  const router = useRouter();
  return (
    <div className={`grid grid-cols-2 gap-2`}>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={200} className='jh-full object-cover col-span-1' alt="sadsa"/>}
      
        <div className='col-span-1'>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-xl"} ${router.locale == "ne" ? "font-devhead":"font-title"} hover:underline`}><Link href={`/${id}`}>{title}</Link></h3>
          {description && <p className={`text-gray-500 line-clamp-3 md:line-clamp-4 ${router.locale == "ne" ? "font-devbody text-xl mt-2 font-medium leading-5":"font-body"}`}>{description}</p>}
          {/* <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p> */}
        </div>
    </div>
  )
}

export function NewsCardWithImageTop({id,title,description,image,imageSize,author,readTime,size,publishedAt,category}: Props) {
  const date = new Date(publishedAt).toDateString()
  return (
    <div className='grid grid-cols-1'>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={10} className={"w-full object-cover"} alt="sadsa"/>}
        <div className='py-2'>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-2xl"} font-bold font-title hover:underline`}><Link href={`/${id}`}>{title}</Link></h3>
          {description && <p className='text-gray-500 line-clamp-2 md:line-clamp-4'>{description}</p>}
          <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p>
        </div>
    </div>
  )
}


export function MainNewsShimmer(){
  return(
    <div className='col-span-3 md:col-span-2 animate-pulse'>
          <div className='w-full h-96 bg-gray-400'></div>
          <hr/>
          <div className='py-2'>
            <h3 className='w-full h-8 bg-gray-400'></h3>
            <h3 className='w-4/5 h-8 mt-1 bg-gray-400'></h3>
            <p className='w-full h-3 mt-3 bg-gray-400'></p>
            <p className='w-full h-3 mt-1 bg-gray-400'></p>
            <p className='w-full h-3 mt-1 bg-gray-400'></p>
            <p className='w-full h-3 mt-1 bg-gray-400'></p>
            <p className='w-full h-3 mt-1 bg-gray-400'></p>
            <p className='w-full h-3 mt-1 bg-gray-400'></p>
            <p className='w-full h-3 mt-1 bg-gray-400'></p>
            <p className='w-2/3 h-3 mt-1 bg-gray-400'></p>
            
          </div>
        </div>
  )
}


export function NewsShimmer() {
  return (
    <div className='p-5 animate-pulse'>
            <p className='py-4 text-xl w-1/5 bg-gray-400'></p>
            <h1 className='mt-6 w-full h-8  bg-gray-400'></h1>
            <h1 className='mt-2 w-3/5 h-8  bg-gray-400'></h1>
            <p className='mt-4 w-1/5 h-6 bg-gray-400'></p>
            <p className='mt-2 w-2/5 h-6 bg-gray-400'></p>
            <div className='bg-gray-400 mt-2 h-24'>      
            </div>
            <p className={`mt-5 w-full h-96 bg-gray-400`}></p>
          </div>
  )
}

export function NewsCardShimmer({withContent,withImage}:{withContent?:boolean,withImage?:boolean}) {

  return ( 
    <div className={`flex items-start space-x-3 animate-pulse p-2`}>
       {
        withImage && <div className='w-52 h-40 object-cover bg-gray-400'/>
       }
        <div className='w-full'>
          <h3 className={`text-xl hover:underline w-full h-6 bg-gray-400`}></h3>
          <h3 className={`text-xl hover:underline ${withImage ? "w-4/5":"w-2/3"} h-6 mt-1 bg-gray-400`}></h3>
          {withContent && 
          <div>
            <p className={`w-full h-3 bg-gray-400 mt-2`}></p>
            <p className={`w-full h-3 bg-gray-400 mt-1`}></p>
            <p className={`w-full h-3 bg-gray-400 mt-1`}></p>
            <p className={`w-full h-3 bg-gray-400 mt-1`}></p>
          </div>
          }
          <p className={`w-32 h-3 bg-gray-400 mt-2`}></p>
        </div>
    </div>
  )
}


export function ModernNewsCardShimmer({withContent,withImage}:{withImage?:boolean,withContent?:boolean}) {
  const router = useRouter();
  return (
    <div className={`grid grid-cols-2 gap-2`}>
      {
        withImage && <div className='w-full h-40 object-cover bg-gray-400'/>
       }
      
        <div className='col-span-1'>
          <h3 className={`text-xl hover:underline w-full h-6 bg-gray-400`}></h3>
          {withContent && 
          <div>
            <p className={`w-full h-3 bg-gray-400 mt-2`}></p>

            <p className={`w-full h-3 bg-gray-400 mt-1`}></p>
            <p className={`${withImage ? "w-4/5":"w-2/3"} h-3 bg-gray-400 mt-1`}></p>
          </div>
          }
          <p className={`w-32 h-3 bg-gray-400 mt-2`}></p>
        </div>
    </div>
  )
}

export function NewsCardWithImageTopShimmer({withContent,withImage}:{withImage?:boolean,withContent?:boolean}) {

  return (
    <div className={`flex flex-col items-start space-y-1 animate-pulse p-2`}>
      {
        withImage && <div className='w-full h-40 object-cover bg-gray-400'/>
       }
        <div className='py-2 w-full'>
           <h3 className={`text-xl hover:underline w-full h-6 bg-gray-400`}></h3>
          {withContent && 
          <div>
            <p className={`w-full h-3 bg-gray-400 mt-2`}></p>

            <p className={`w-full h-3 bg-gray-400 mt-1`}></p>
            <p className={`${withImage ? "w-4/5":"w-2/3"} h-3 bg-gray-400 mt-1`}></p>
          </div>
          }
          <p className={`w-32 h-3 bg-gray-400 mt-2`}></p>
        </div>
    </div>
  )
}
