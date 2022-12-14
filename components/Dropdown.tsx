import { ReactNode, useState } from 'react'
import { CheckIcon } from './Icons'

type Props = {
  title:string,
  items?:any[],
  children?:ReactNode,
  value?:string
}

function Dropdown({title,items,children}: Props) {
  const [menu,openMenu] = useState(false)
  return (
    <div>
      
  <button id="dropdownDefault" onClick={() => openMenu(!menu)} data-dropdown-toggle="dropdown" className="px-4 py-2.5 text-center inline-flex items-center" type="button">
    {title}
    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  <div id="dropdown" className={`${menu ? "block":"hidden"} absolute z-10 p-1 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
      {
        !children ? 
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        {
          items && items.map((item,index) => (
            <li key={index}>
              <button onClick={() => {item.handle();openMenu(false)}}className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >{item.title}</button>
            </li>
          ))
        }
      </ul>:
      children
      }
  </div>

    </div>
  )
}
export function DropdownTwo({title,items,children,value}: Props) {
  const [menu,openMenu] = useState(false)
  const [selected,setSelected] = useState(value)
  return (
    <div>
      
  <button id="dropdownDefault" onClick={() => openMenu(!menu)} data-dropdown-toggle="dropdown" className="px-4 py-2.5 text-center inline-flex items-center" type="button">
    {title}
    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  <div id="dropdown" className={`${menu ? "block":"hidden"} absolute z-10 p-1 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        {
          items && items.map((item,index) => (
            <li key={index}>
              <button onClick={(e) => {item.handle();setSelected(item.title);openMenu(false)}}className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex space-x-2" >
                {item.children}
                <p>{item.title}</p>
                {
                item.title === selected ? <CheckIcon/>:<></>
              }
              </button>
            </li>
          ))
        }
      </ul>
  </div>

    </div>
  )
}

export default Dropdown