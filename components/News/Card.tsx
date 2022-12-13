import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
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

export function NewsCard({title,description,image,imageSize,author,readTime,size,publishedAt,category,reverse}: Props) {
  const date = new Date(publishedAt).toDateString()
  const router = useRouter();
  return (
    <div className={`flex ${reverse ? "md:flex-row-reverse":"md:flex-row"} items-start space-x-3`}>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={20} className='w-52 h-40 object-cover' alt="sadsa"/>}
        <div className=''>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-2xl"} ${router.locale == "ne" ? "font-devhead":"font-title"} hover:underline`}><Link href={"/"}>{title}</Link></h3>
          {description && <p className={`text-gray-500 line-clamp-3 md:line-clamp-4 ${router.locale == "ne" ? "font-devbody text-xl mt-2 font-medium leading-5":"font-body"}`}>{description}</p>}
          <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p>
        </div>
    </div>
  )
}

export function ModernNewsCard({title,description,image,imageSize,author,readTime,size,publishedAt,category,reverse}: Props) {
  const date = new Date(publishedAt).toDateString()
  const router = useRouter();
  return (
    <div className={`grid grid-cols-2`}>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={200} className='w-52 h-full object-cover col-span-1' alt="sadsa"/>}
      
        <div className=''>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-xl"} ${router.locale == "ne" ? "font-devhead":"font-title"} hover:underline`}><Link href={"/"}>{title}</Link></h3>
          {description && <p className={`text-gray-500 line-clamp-3 md:line-clamp-4 ${router.locale == "ne" ? "font-devbody text-xl mt-2 font-medium leading-5":"font-body"}`}>{description}</p>}
          <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p>
        </div>
    </div>
  )
}

export function NewsCardWithImageTop({title,description,image,imageSize,author,readTime,size,publishedAt,category}: Props) {
  const date = new Date(publishedAt).toDateString()
  return (
    <div className='grid grid-cols-1'>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={10} className={"w-full object-cover"} alt="sadsa"/>}
        <div className='py-2'>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-2xl"} font-bold font-title hover:underline`}><Link href={"/"}>{title}</Link></h3>
          {description && <p className='text-gray-500 line-clamp-2 md:line-clamp-4'>{description}</p>}
          <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p>
        </div>
    </div>
  )
}
