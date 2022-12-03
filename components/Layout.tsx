import React, { useState } from 'react'
import Footer from './Footer'
import { MoonIcon, SunIcon } from './Icons'
import Navbar from './Navbar'

type Props = {
  children:React.ReactNode
}

function Layout({children}: Props) {
  const [isDark,setDark]= useState(false)
  return (
    <div className={`${isDark && "dark"}`}>
      <div className=' dark:bg-gray-700 dark:text-white'>
      <Navbar changeColor={() => setDark(!isDark)} colorModeIcon={!isDark ? <SunIcon/>:<MoonIcon/>}/>
      {children}
      <Footer/>
    </div>
    </div>
  )
}

export default Layout