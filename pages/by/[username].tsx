import React from 'react'
import Layout from '../../components/Layout'
import Image from "next/image"
import { TwitterIcon } from '../../components/Icons'
import Link from 'next/link'
type Props = {}

function User({}: Props) {
  return (
    <Layout>
      <div className='p-5'>
        <div className='flex items-center space-x-3'>
        <Image src={"/img.webp"} width={100} height={100} className="w-28 h-28 rounded-full object-cover" alt={""}/>
        <div>
          <h1 className='text-3xl font-mono font-bold'>Abhishek Bhatta</h1>
          <p>Anton Troianovski is the Moscow bureau chief for The New York Times.</p>
          <Link href={"/add"} className='flex space-x-2'>
             <TwitterIcon/><p className='text-gray-500 dark:text-gray-400'>abhishek</p>
          </Link>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default User