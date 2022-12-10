import React, { ReactNode, useState } from 'react'
import { CloseIcon, HamMenu, SearchIcon, SunIcon } from './Icons'
import useTranslation from 'next-translate/useTranslation'
import Dropdown, { DropdownTwo } from './Dropdown'
import regions from '../libs/regions'
import categories from "../libs/categories.json"
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  changeColor: () => void,
  colorModeIcon:ReactNode
}

function Navbar({changeColor,colorModeIcon}: Props) {
  const date = new Date()
  const [showMenu,setShowMenu] = useState(false)
  const [openSearchBar,setSearchBar] = useState(false)
  const [region,setRegion] = useState("General")
  const router = useRouter();
  const { t, lang } = useTranslation('common')
  return (
    <div className=''>
      <div className=''>
      </div>
      <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-3'>
          <button onClick={() => setShowMenu(true)}><HamMenu/></button>
          <div className='hidden md:flex items-center'>
            <p>{date.toDateString()}</p>
            <DropdownTwo title='REGION' items={regions} value={region}/>
          </div>
        </div>
        <h1 className={`text-center tracking-widest text-xl sm:text-2xl md:text-4xl ${router.locale == "ne" ? "font-devlogo":"font-logo"}`}><Link href={"/"}>{t("logo")}</Link></h1>
        <div className='flex space-x-6'>
          {/* ------------------------------- Search bar ------------------------------- */}
          <button onClick={() => setSearchBar(true)}><SearchIcon/></button>
          <div className={`absolute ${openSearchBar ? "translate-y-0":"-translate-y-44"} duration-300 p-10 z-40 -left-6 top-0 right-0 bg-black h-44 text-white`}>
            <h3 className='text-2xl'>#Search</h3>
            <div className='text-center'>
              <input type="search" placeholder='Search news, article, section, journalist' className='border-b-2 text-white focus:outline-none text-2xl w-full bg-transparent border-white p-2' />
              <button className='text-white uppercase mt-4' onClick={() => setSearchBar(false)}>Close</button>
            </div>
            </div>
          <div className='hidden md:flex items-center space-x-6'>  
          {/* ------------------------------- Locale Change ------------------------------- */}
          <Dropdown title={`${router.locale?.toUpperCase()}`}>
            {
              <ul className="py-1 text-gray-700 dark:text-gray-200">
                {
                  router.locales?.map((locale) => (
                    <li key={locale} className="block py-2 px-4 w-full uppercase hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link href={router.asPath} locale={locale}>{locale}</Link>
                    </li>
                  ))
                }
              </ul>
            }
          </Dropdown>
          <button onClick={changeColor}>{colorModeIcon}</button>
          </div>
          <button className='border-2 border-black px-4 dark:border-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white'>Login</button>
        </div>   
      </div>
      <hr className='border-t-gray-400 mx-5'/>
      <div className='hidden md:block p-2 '>
        <ul className='flex flex-wrap space-x-4 justify-center items-center '>
          {
            categories.map((cat,index) => (
              <li key={index} className="hover:text-green-700"><Link href={cat.href}>{cat.title}</Link></li>
            ))
          }
        </ul>
      </div>
      <hr className='border-t-gray-400  mx-5'/>
      <div className='p-2 py-4 text-center flex justify-center items-center space-x-4'>
        <span className='text-red-600 font-bold text-xs'>LIVE</span>
        <p>Columbia vs Brazil</p>
      </div>
      <hr className='border-t-gray-400  mx-5'/>
      <hr className='mt-0.5 border-t-gray-400  mx-5'/>
      <div className={`absolute transition-all duration-200 left-0 top-0 h-full w-4/6 sm:w-3/6 md:w-1/6 bg-white dark:bg-gray-900 dark:fill-white shadow-xl p-5 ${showMenu ? "translate-x-0":"-translate-x-full"}`}>
        <div className='text-right'>
          <button onClick={() => setShowMenu(false)}><CloseIcon/></button>
        </div>
        <div>
          <ul>
            {
              categories.map((cat,index) => (
                <li key={index} className="hover:text-green-700"><Link href={cat.href}>{cat.title}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar