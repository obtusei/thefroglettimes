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
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse":"md:flex-row"} md:space-x-3`}>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={10} style={{objectFit:"cover"}} alt="sadsa"/>}
        <div className='py-2'>
          {
            category && <p className='text-green-700'>{category}</p>
          } 
          <h3 className={`text-xl ${size ? size:" md:text-2xl"} font-semibold ${router.locale == "ne" ? "font-devtitle":"font-title"} hover:underline`}><Link href={"/"}>{title}</Link></h3>
          {description && <p className='text-gray-500 line-clamp-2 md:line-clamp-4'>{description}</p>}
          <p className='text-sm text-gray-500'>{readTime ? readTime:date}{" • "}<Link href={`/by/love`} className="hover:underline">{author && author}</Link></p>
        </div>
    </div>
  )
}

export function NewsCardWithImageTop({title,description,image,imageSize,author,readTime,size,publishedAt,category}: Props) {
  const date = new Date(publishedAt).toDateString()
  return (
    <div className='flex flex-col'>
      {image && <Image src={image} width={imageSize ? imageSize:300} height={10} style={{objectFit:"cover"}} alt="sadsa"/>}
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
