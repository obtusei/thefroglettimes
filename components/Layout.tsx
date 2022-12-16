import React, { useEffect, useState,useCallback, KeyboardEvent } from 'react'
import Footer from './Footer'
import { MoonIcon, SunIcon } from './Icons'
import Navbar from './Navbar'
import { useSession } from 'next-auth/react'

type Props = {
  children:React.ReactNode,
  bg?:string,
  hideNav?:boolean,
  hideFooter?:boolean
}

function Layout({children,bg,hideNav,hideFooter}: Props) {
  const [isDark,setDark]= useState(false)
  const [showSearch,setshowSearch]= useState(false)
  const handleKeyPress = useCallback(
    (event:  globalThis.KeyboardEvent) => {
      if ((event.metaKey === true || event.ctrlKey === true) && event.key === "j") {
        event.preventDefault();
        setDark(!isDark);
      }
      else if((event.metaKey === true || event.ctrlKey === true) && event.key === "s"){
        event.preventDefault();
        setshowSearch(!showSearch);
      }
    },
    [isDark,showSearch]
  );
  const {data:session} = useSession()
  useEffect(()=> {
     document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress])
  return (
    <div className={`${isDark && "dark"} ${bg && bg} font-serif`}>
      <div className=' dark:bg-gray-700 dark:text-white'>
      {
        hideNav ? <></>:<Navbar changeColor={() => setDark(!isDark)} colorModeIcon={!isDark ? <SunIcon/>:<MoonIcon/>} openSearchBar={showSearch} setSearchBar={setshowSearch}/>
      }
      {children}
      {
        hideFooter ? <></>:<Footer/>
      }
    </div>
    </div>
  )
}

export default Layout