import React, { ReactNode, useState } from 'react'
import { CloseIcon, HamMenu, SunIcon } from './Icons'
import useTranslation from 'next-translate/useTranslation'
import Dropdown from './Dropdown'
import regions from '../libs/regions'
type Props = {
  changeColor: () => void,
  colorModeIcon:ReactNode
}

function Navbar({changeColor,colorModeIcon}: Props) {
  const date = new Date()
  const [showMenu,setShowMenu] = useState(false)
  const { t, lang } = useTranslation('common')
  return (
    <div>
      <div className=''>
      </div>
      <div className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-3'>
          <button onClick={() => setShowMenu(true)}><HamMenu/></button>
          <div className='hidden md:flex items-center'>
            <p>{date.toDateString()}</p>
            <Dropdown title='REGION' items={regions}/>
          </div>
        </div>
        <h1 className='text-center text-3xl font-logo'>the <br /> froglet times</h1>
        <div className='flex space-x-6'>
          <div className='hidden md:flex items-center space-x-6'>  
          <Dropdown title='EN' items={[{title:"EN",action:() => alert("asds")},{title:"NE",action:() => alert("asds")}]}/>
          <button onClick={changeColor}>{colorModeIcon}</button>
          <button>Register</button>
          </div>
          <button>Login</button>
        </div>   
      </div>
      <hr className='border-t-gray-400 mx-5'/>
      <div className='hidden md:block p-2'>
        <ul className='flex space-x-4 justify-center items-center'>
          <li>Politics</li>
          <li>Science</li>
          <li>Music</li>
          <li>Culture</li>
          <li>Sports</li>
          <li>Food</li>
          <li>Travel</li>
          <li>Arts</li>
          <li>Health</li>
          <li>Style</li>
        </ul>
      </div>
      <hr className='border-t-gray-400  mx-5'/>
      <div className='p-2 py-4 text-center flex justify-center space-x-4'>
        <span className='text-red-600 font-bold text-xs'>LIVE</span>
        <p>Columbia vs Brazil</p>
      </div>
      <hr className='border-t-gray-400  mx-5'/>
      <hr className='mt-0.5 border-t-gray-400  mx-5'/>
      <div className={`absolute transition-all duration-200 left-0 top-0 bottom-0 w-4/6 sm:w-3/6 md:w-1/6 bg-white shadow-xl p-5 ${showMenu ? "translate-x-0":"-translate-x-full"}`}>
        <div className='text-right'>
          <button onClick={() => setShowMenu(false)}><CloseIcon/></button>
        </div>
        <div>
          <ul>
            <li>Politics</li>
            <li>Science</li>
            <li>Music</li>
            <li>Culture</li>
            <li>Sports</li>
            <li>Food</li>
            <li>Travel</li>
            <li>Arts</li>
            <li>Health</li>
            <li>Style</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar