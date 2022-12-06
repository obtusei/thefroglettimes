import React from 'react'
import Layout from '../../components/Layout'

type Props = {}

function Section({}: Props) {
  return (
    <Layout>
      <div className='p-5'>
        <h2 className='text-4xl'>Politics</h2>
        <hr />
        <div>

        </div>
        <div>
          <div className='p-2'>
            <select title='sadsad'>
              <option value="">2022</option>
              <option value="">2022</option>
              <option value="">2022</option>
              <option value="">2022</option>
            </select>
            <select>
              <option value="">Month</option>
            </select>
            <select>
              <option value="">06</option>
            </select>
            <input type="search" name="" className='bg-gray-200' id="" placeholder='Search...' />
            <button>Search</button>
          </div>

          <div className='flex '>
            <div>
              <div className='flex flex-row justify-between p-2 items-center space-x-5'>
              <div className='w-40'>6 Dec, 2022 </div>
              <div>
                <h2 className='text-3xl'>Titlte of the news goes here</h2>
                <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, excepturi adipisci labore odit quisquam doloremque sed earum illo provident aperiam autem soluta expedita, cum quidem voluptates nesciunt! Corporis, enim vitae!</p>
              </div>
            </div>
            <div className='flex flex-row justify-between p-2 items-center space-x-5'>
              <div className='w-40'>6 Dec, 2022 </div>
              <div>
                <h2 className='text-3xl'>Titlte of the news goes here</h2>
                <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, excepturi adipisci labore odit quisquam doloremque sed earum illo provident aperiam autem soluta expedita, cum quidem voluptates nesciunt! Corporis, enim vitae!</p>
              </div>
            </div>
            </div>
            <div>
              <div className='w-80 h-96 bg-black text-white flex justify-center items-center text-3xl'>ADS</div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Section