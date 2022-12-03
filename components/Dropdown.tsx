import React, { useState } from 'react'

type Props = {
  title:string,
  items:any[]
}

function Dropdown({title,items}: Props) {
  const [menu,openMenu] = useState(false)
  return (
    <div>
      
  <button id="dropdownDefault" onClick={() => openMenu(!menu)} data-dropdown-toggle="dropdown" className="text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
    {title}
    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
  <div id="dropdown" className={`${menu ? "block":"hidden"} absolute z-10 p-1 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        {
          items.map((item,index) => (
            <li key={index}>
              <button onClick={item} className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.title}</button>
            </li>
          ))
        }
        
      </ul>
  </div>

    </div>
  )
}

export default Dropdown