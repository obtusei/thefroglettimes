import React, { useEffect, useState,useCallback, KeyboardEvent } from 'react'
import Footer from './Footer'
import { MoonIcon, SunIcon } from './Icons'
import Navbar from './Navbar'

type Props = {
  children:React.ReactNode,
  bg?:string
}

function Layout({children,bg}: Props) {
  const [isDark,setDark]= useState(false)
  const handleKeyPress = useCallback(
    (event:  globalThis.KeyboardEvent) => {
      if ((event.metaKey === true || event.ctrlKey === true) && event.key === "j") {
        setDark(!isDark);
      }
    },
    [isDark]
  );
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
      <Navbar changeColor={() => setDark(!isDark)} colorModeIcon={!isDark ? <SunIcon/>:<MoonIcon/>}/>
      {children}
      <Footer/>
    </div>
    </div>
  )
}

export default Layout