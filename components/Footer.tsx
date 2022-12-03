import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='text-center p-5'>
      <div className=' border-t-2 border-t-gray-400 border-b-2 border-gray-400'>
        <h1 className='font-logo text-lg py-2'>the <br/> froglet times</h1>
      </div>
      <div className='flex justify-between py-5 text-left'>
      <div>
        <ul>
          <li className='font-bold'>News</li>
          <li>Home Page</li>
          <li>Breaking News</li>
          <li>Food</li>
          <li>Finance</li>
          <li>Health</li>
          <li>Lifestyle</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
          <li>Home Page</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        Subscribe to our newsletter
        <input type="email" name="" id="" />
      </div>
    </div>
    <hr className='border-black'/>
      <div className='py-5'>
        <p>© 2022 The Froglet Times.</p>
        
        <div>
          <ul className='mt-2 flex flex-wrap space-x-8 justify-center text-gray-500'>
            <li>About Us</li>
            <li>Accessibility</li>
            <li>Work with us</li>
            <li>Advertise</li>
            <li>Your Ad Chocies</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Help</li>
            <li>Subscriptions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer