import React, { ReactNode, useState } from 'react'
import { CloseIcon, HamMenu, SearchIcon, SunIcon, SunsetIcon } from './Icons'
import useTranslation from 'next-translate/useTranslation'
import Dropdown, { DropdownTwo } from './Dropdown'
import regions from '../libs/regions'
import livenews from "../libs/livenews.json"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GetCategories } from '../utils/newsapi'
import { signOut, useSession } from 'next-auth/react'
import { GetSession, GetSessionDjango, Logout } from '../utils/userapi'
import dynamic from 'next/dynamic'
import { deleteCookie } from 'cookies-next'

type Props = {
  changeColor: () => void;
  colorModeIcon: ReactNode;
  openSearchBar:boolean
  setSearchBar:React.Dispatch<React.SetStateAction<boolean>>
};

function Navbar({changeColor,colorModeIcon,openSearchBar,setSearchBar}: Props) {
  const date = new Date()
  const {categories,isError} = GetCategories();  

  // const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=27.5808256&lon=85.5179264&appid=b0b7a001a8281701c327f0974b36151c&units=metric`
  // const [weather,setWeather] = useState<any>(null)
  // useEffect(() => {
  //   fetch(weatherURL)
  //   .then(res => res.json())
  //   .then(data => setWeather(data))
  // },[weatherURL])
  
  const [showMenu,setShowMenu] = useState(false)
  const router = useRouter();
  // const [openSearchBar,setSearchBar] = useState(showSearch)
  const [region,setRegion] = useState(router.locale == "en" ? "General":"सामान्य")
  const [searchTerm,setSearhTerm] = useState("")
  const { t, lang } = useTranslation('common')
  const {data:session} = useSession();
  const {userSession} = GetSession();
  const searchButton = <button onClick={() => setSearchBar(true)}><SearchIcon/></button>
  const handleClick = (path: string) => {
    router.push(path);
  };
  const langDropDown = <Dropdown title={`${router.locale?.toUpperCase()}`}>
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
      const colorModeSwitch = <button onClick={changeColor}>{colorModeIcon}</button>
      const regionDropDown = <Dropdown title={`${router.query.region ? router.query.region:region}`}value={region}>
     <ul className="py-1 text-gray-700 dark:text-gray-200">
                {
                  regions.map((region,index) => (
                    <li key={index} className="block py-2 px-4 w-full uppercase hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <Link href={`?region=${region.title}`} shallow>{router.locale === "en" ? region.title:region.ne}</Link>
                    </li>
                  ))
                }
              </ul>
  </Dropdown>
  return (
    <div className=''>
      <div className=''>
      </div>
      <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-3'>
          <button onClick={() => setShowMenu(true)}><HamMenu/></button>
          <div className='hidden md:flex items-center'>
            <p>{date.toDateString()}</p>
            {router.pathname == "/" && regionDropDown}
          </div>
        </div>
        
        <h1 className={`text-center tracking-widest text-xl sm:text-2xl md:text-4xl ${router.locale == "ne" ? "font-devlogo":"font-logo"}`}><Link href={"/"}>{t("logo")}</Link></h1>
        <div className='flex space-x-6'>
          {/* ------------------------------- Search bar ------------------------------- */}
          {searchButton}
          <div className={`absolute ${openSearchBar ? "translate-y-0":"-translate-y-44"} duration-300 p-10 z-40 -left-6 top-0 right-0 bg-black h-44 text-white`}>
            <h3 className='text-2xl'>#{t("searchHead")}</h3>
            <div className='text-center'>
              <form className='flex'>
                <input type="search" value={searchTerm} onChange={(e) => setSearhTerm(e.target.value)} placeholder={t('search')} className='border-b-2 text-white focus:outline-none text-2xl w-full bg-transparent border-white p-2' />
                <button className='btn bg-white text-black px-4' type='submit' onClick={(e) => 
                  {
                    e.preventDefault();
                    router.push( {pathname:"/search",query:{q:searchTerm,tab:"news"}});
                    setSearchBar(false);
                  
                  }

                  }><SearchIcon/></button>
              </form>
              <button className='text-white uppercase mt-4' onClick={(e) => setSearchBar(false)}>{t("close")}</button>
            </div>
            </div>
          <div className='hidden md:flex items-center space-x-6'>  
          {/* ------------------------------- Locale Change ------------------------------- */}
          {langDropDown}
          {colorModeSwitch}
          </div>
          {
            userSession ? <Dropdown 
            title={userSession?.fullname}
            items={[
              {title:"Profile",handle:() => router.push("/writer/me")},
              {title:"Create",handle:() => router.push("/writer/create")},
              {title:"Logout",handle:() => {signOut()}},
              ]}
          />:
          <button
            onClick={() => handleClick("/login")}
            className="border-2 border-black px-4 dark:border-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white"
          >
            {t("login")}
          </button>
          }
        </div>
      </div>
      <hr className='border-t-gray-400 mx-5'/>
      <div className='hidden md:block p-2 '>
        <ul className='flex flex-wrap space-x-4 justify-center items-center '>
          {
            !categories ? categories.map((cat:any,index:number) => (
              <li key={index} className={`hover:text-green-700 ${router.locale === "ne" && "font-devCat"}`}><Link href={cat.href}>{router.locale == "en" ? cat.title:cat.ne}</Link></li>
            )):
            [...Array(12)].map((card,index) => (
              <li key={index} className='h-6 w-20 animate-pulse bg-gray-400 mt-1'></li>
            ))
          }
        </ul>
      </div>
      <hr className='border-t-gray-400  mx-5'/>
      <div className='px-5 py-4 text-center flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center space-x-4'>
        <div className={`flex items-center space-x-4 ${router.locale == "ne" && "font-devCat"}`}>
        <span className='text-red-600 dark:text-blue-200 font-bold text-lg'>{t("live")}</span>
        {
          router.locale === "en" ? livenews.en.map((content,index) => (
            <p className={`pr-2 ${livenews.ne.length != index+1 && "border-r-2"}`} key={index}>{content.title}</p>
          )): livenews.ne.map((content,index) => (
            <p key={index} className={`pr-2  ${livenews.ne.length != index+1 && "border-r-2"}`}>{content.title}</p>
          ))
        }
        </div>
        <div className='flex items-center space-x-4'>
          <SunsetIcon/>
          <p className='font-bold text-xl'>
            {/* {weather.main.temp}°C */}12°C
            </p>
          <p>22°C - 6°C</p>
        </div>

      </div>
      <hr className='border-t-gray-400  mx-5'/>
      <hr className='mt-0.5 border-t-gray-400  mx-5'/>
      <div className={`overflow-y-auto fixed transition-all duration-200 left-0 top-0 bottom-0 bg-gray-200 dark:bg-gray-900 dark:fill-white shadow-xl p-5 ${showMenu ? "translate-x-0":"-translate-x-full"}`}>
        <div className='flex justify-between md:justify-end'>
          <div className='flex md:hidden items-center'>
            {colorModeSwitch}
            
          </div>
          <button onClick={() => setShowMenu(false)}><CloseIcon/></button>
        </div>
        <div className='flex justify-between mt-2 border-t-2 border-b-2 border-gray-400 md:hidden'>{regionDropDown}</div>
        <div className='mt-2'>
          <ul>
            {
              categories ? categories.map((cat:any,index:number) => (
                <li key={index} className="hover:text-green-700 hover:dark:text-green-400"><Link href={`/section/${cat.id}`}>{router.locale == "en" ? cat.title:cat.ne}</Link></li>
              )):<>...</>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
